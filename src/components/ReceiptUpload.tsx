import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

type ReceiptUploadProps = {
  // Optional callback so parent screens can receive OCR result for further processing.
  onExtracted?(payload: { file: File; text: string }): void;
};

export default function ReceiptUpload({ onExtracted }: ReceiptUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'processing' | 'done' | 'error'>('idle');
  const [progress, setProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setExtractedText('');
    setError(null);
    setProgress(0);
    setStatus('idle');

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleExtract = async () => {
    if (!selectedFile) return;

    setStatus('processing');
    setProgress(0);
    setError(null);

    try {
      const { data } = await Tesseract.recognize(selectedFile, 'eng', {
        logger: (m) => {
          if (m.status === 'recognizing text' && m.progress != null) {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });

      const text = data.text || '';
      setExtractedText(text);
      setStatus('done');

      if (onExtracted) {
        onExtracted({ file: selectedFile, text });
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong while reading the receipt. Please try another image.');
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white dark:bg-fin-green-900 border border-fin-green-200 dark:border-fin-green-800 rounded-2xl p-6 space-y-4">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-fin-green-900 dark:text-fin-green-100">
          Upload a receipt
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Upload a clear photo or scan of your receipt. We&apos;ll try to read the text so you can
          use it to track your expenses.
        </p>
      </div>

      <label className="mt-2 flex flex-col items-center justify-center gap-2 border-2 border-dashed border-fin-green-300 dark:border-fin-green-700 rounded-xl px-4 py-6 cursor-pointer hover:border-fin-green-500 dark:hover:border-fin-green-400 transition-colors">
        <span className="text-sm font-medium text-fin-green-800 dark:text-fin-green-200">
          Click to choose a file
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Supported: JPG, PNG, PDF (first page)
        </span>
        <input
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {selectedFile && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Selected file: <span className="font-semibold">{selectedFile.name}</span>
          </p>
          {previewUrl && selectedFile.type.startsWith('image/') && (
            <div className="max-h-64 overflow-hidden rounded-xl border border-fin-green-100 dark:border-fin-green-800">
              <img
                src={previewUrl}
                alt="Receipt preview"
                className="w-full object-contain bg-fin-green-50 dark:bg-fin-green-950"
              />
            </div>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={handleExtract}
        disabled={!selectedFile || status === 'processing'}
        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-fin-green-600 text-white font-semibold text-sm hover:bg-fin-green-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === 'processing' ? 'Reading receipt…' : 'Extract text from receipt'}
      </button>

      {status === 'processing' && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
            <span>Recognizing text…</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 w-full bg-fin-green-50 dark:bg-fin-green-950 rounded-full overflow-hidden">
            <div
              className="h-full bg-fin-green-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {error && (
        <p className="text-sm text-red-600 dark:text-red-400 font-medium">
          {error}
        </p>
      )}

      {extractedText && (
        <div className="space-y-1">
          <p className="text-sm font-semibold text-fin-green-900 dark:text-fin-green-100">
            Extracted text
          </p>
          <pre className="max-h-64 overflow-auto text-xs bg-fin-green-50 dark:bg-fin-green-950 border border-fin-green-100 dark:border-fin-green-800 rounded-lg p-3 text-gray-800 dark:text-gray-200 whitespace-pre-wrap">
            {extractedText}
          </pre>
        </div>
      )}
    </div>
  );
}

