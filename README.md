# FinWise - AI Financial Advisor

A modern, responsive frontend for an AI-powered financial advisor website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Sophisticated Green Theme** - Beautiful green color palette maintained in both light and dark modes
- 🌓 **Dark/Light Mode Toggle** - Seamless theme switching with persistent preferences
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 💬 **AI Chat Interface** - ChatGPT-style chat interface with:
  - Auto-resizing textarea
  - Send on Enter, new line on Shift+Enter
  - Floating send button inside input box
  - File upload with paperclip icon
  - Sticky input bar at bottom
  - Scrollable message area
  - User and AI message bubbles
  - AI thinking loader
  - Typing indicator animation
- 🧭 **Collapsible Sidebar Navigation** - Sidebar with icons that can be collapsed
- 📄 **Multiple Pages**:
  - Single-scroll landing page
  - AI Chat page
  - About Us
  - FAQs (with accordion)
  - Disclaimer
  - Privacy Policy

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Sidebar.tsx      # Collapsible sidebar navigation
│   ├── ThemeToggle.tsx  # Dark/light mode toggle
│   ├── ChatInput.tsx    # Chat input with file upload
│   ├── MessageBubble.tsx # Message display component
│   ├── TypingIndicator.tsx # Typing animation
│   └── ThinkingLoader.tsx  # Thinking state indicator
├── contexts/            # React contexts
│   └── ThemeContext.tsx # Theme management
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Chat.tsx        # AI chat interface
│   ├── About.tsx       # About us page
│   ├── FAQs.tsx        # FAQs page
│   ├── Disclaimer.tsx  # Disclaimer page
│   └── Privacy.tsx     # Privacy policy page
├── App.tsx             # Main app component with routing
└── main.tsx            # Entry point
```

## Customization

### Colors

The green theme colors can be customized in `tailwind.config.js` under the `fin-green` color palette.

### Fonts

The default font is Inter, loaded from Google Fonts. You can change it in `tailwind.config.js` and `index.html`.

## License

MIT
