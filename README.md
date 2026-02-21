# finwise-
AI-powered financial advisor and research agent 

# Finwise: AI-Powered Financial Advisor & Expense Manager

## 📌 Project Overview
Finwise is an advanced AI-powered financial advisor and expense manager designed to provide **personalized financial advice** based on spending patterns, payment screenshots, Splitwise data, and uploaded financial content.  
Users can upload bank statements, financial books, or link articles, and receive tailored insights aligned with top financial philosophies.

⚠️ **Important Note:**  
Finwise does **not provide financial guarantees or certainties**.  
The system is designed to **advise and guide**, not to promise outcomes.  
All recommendations are suggestions based on data analysis and financial philosophies.

---

## 🎯 Domain Focus
- Financial Technology & Personal Wealth Management
- AI-driven financial planning
- OCR-based expense tracking
- Multi-source financial content synthesis

---

## 🏗️ Architecture (Track B MVP)

# Finwise: AI-Powered Financial Advisor & Expense Manager

## 📌 Project Overview
Finwise is an advanced AI-powered financial advisor and expense manager designed to provide **personalized financial advice** based on spending patterns, payment screenshots, Splitwise data, and uploaded financial content.  
Users can upload bank statements, financial books, or link articles, and receive tailored insights aligned with top financial philosophies.

⚠️ **Important Note:**  
Finwise does **not provide financial guarantees or certainties**.  
The system is designed to **advise and guide**, not to promise outcomes.  
All recommendations are suggestions based on data analysis and financial philosophies.

---

## 🏗️ System Architecture

### **Data Ingestion Layer**
- Payment screenshots → OCR pipeline (Tesseract/EasyOCR).  
- Splitwise API → expense-sharing data.  
- Bank statements → CSV/PDF parsers.  
- User uploads → financial books, linked articles.  
- **Output:** Normalized JSON schema for downstream agents.

### **Processing & Categorization Layer**
- **OCR Agent:** Extracts structured text from screenshots.  
- **Expense Categorizer Agent:** Maps transactions into categories (food, rent, travel).  
- **Content Agent:** Summarizes uploaded books/articles into financial insights.  
- **Framework:** FastAPI + LangChain tools.  
- **Storage:** PostgreSQL tables for expenses, categories, and content.

### **Advisory & Intelligence Layer**
- **MVP (2 months):** Rule-based advisor for budgeting suggestions.  
- **Future Vision:** Multi-guru philosophy engine, advanced goal tracking, sentiment analysis.  

### **User Interface Layer**
- **Frontend:** React + Next.js.  
- **UI Libraries:** TailwindCSS, Material UI, Recharts/Chart.js.  
- **Features:** Interactive dashboard, charts, advice cards, dark gradient theme.

### **Storage & Security Layer**
- **Database:** PostgreSQL (Supabase/AWS RDS).  
- **File Storage:** Cloud storage (AWS S3, Supabase).  
- **Security:** JWT authentication, environment variables for API keys.

### **Deployment & Scaling**
- **Frontend:** Vercel.  
- **Backend:** FastAPI on Render/Heroku/AWS.  
- **Database:** Supabase/AWS RDS.  
- **Agents:** Containerized with Docker.  
- **CI/CD:** GitHub Actions.

---

## 📂 Repo Structure

