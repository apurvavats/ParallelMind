# 🧠 ParallelMind

> **Turn text ideas into production-ready React UI components instantly.**

ParallelMind is an AI-powered SaaS application that allows developers and designers to generate fully functional, styled React components using simple natural language prompts. It features a real-time sandboxed preview, version history, and an innovative "Live Link" sharing system.

Live Link:https://parallel-mind.vercel.app/
---

## 🚀 Key Features

* **✨ AI-to-UI Generation:** Transform prompts like *"A modern dark-mode dashboard with charts"* into clean React + Tailwind CSS code.
* **⚡ Instant Live Preview:** See your code render in real-time within a secure sandbox environment.
* **🔗 Shareable Live Links:** Generate a unique, public URL for any design instantly.
* **📂 Version History:** Save and revisit different iterations of your UI concepts.
* **🎨 Modern Stack:** Built with React, Vite, and Supabase for high performance.

---

## 🏗️ Architecture Highlight: The "Live Link" Engine

Unlike traditional code generators that require a new deployment (CI/CD) for every change, ParallelMind uses a **Dynamic Rendering Engine** to make sharing instant.

1.  **Generation:** AI generates the React component string.
2.  **Storage:** When a user clicks "Open Live Link," the code is saved directly to a **Supabase** database row.
3.  **Rendering:** The application hosts a dynamic route (`/view/:id`). When visited, it fetches the raw code from Supabase and hydrates the page client-side.
4.  **Result:** **Zero build time.** Links are live in milliseconds, not minutes.

---

## 🛠️ Tech Stack

### **Frontend**
* **React.js (Vite):** Core framework for a fast, reactive UI.
* **Tailwind CSS:** For rapid, utility-first styling.
* **Lucide React:** For beautiful, consistent iconography.
* **Axios:** For handling API requests.

### **Backend**
* **Node.js & Express:** robust server to handle AI requests and prompt engineering.
* **Gemini API / OpenAI:** The intelligence engine driving the code generation.

### **Database & Cloud**
* **Supabase:** PostgreSQL database for storing users, projects, and UI variants.
* **Row Level Security (RLS):** Custom SQL policies ensure public access for shared links while keeping user data private.
* **Vercel:** Frontend hosting.
* **Render:** Backend hosting.
---

## 📦 Getting Started

Follow these steps to run ParallelMind locally.

### 1. Clone the Repository
```bash
git clone https://github.com/apurvavats/ParallelMind.git
cd ParallelMind

### Backend setup
cd backend
npm install
# Create a .env file and add your API keys (see below)
npm start

### Frontend setup
cd frontend
npm install
# Create a .env file and add your Supabase keys
npm run dev

