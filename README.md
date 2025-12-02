EchoPrep – AI Mock Interview Platform
Built with Next.js, TypeScript, Firebase, Google Gemini
EchoPrep is an AI-powered mock interview platform designed to help users practice behavioral, technical, and system design interviews. It uses Google Gemini for dynamic question generation and structured feedback, while Firebase powers authentication, real-time data handling, and usage analytics. The platform also supports real-time voice interviews using Vapi, successfully handling 20+ concurrent voice sessions in load testing.
🚀 Features
AI-Driven Interview Modes
Behavioral Interviews – STAR-structured prompts, clarity scoring, communication feedback
Technical Interviews – coding Q&A, reasoning chains, correctness scoring
System Design Interviews – architecture prompts, design tradeoff scoring, follow-up question adaptation
Dynamic Question & Feedback Generation
Powered by Google Gemini
Generates:
Adaptive interview questions
5-dimension scoring (e.g., communication, clarity, depth, correctness, structure)
Actionable feedback after each response
Over 150+ full interview runs and 1,500+ Q&A turns logged for progress tracking
Voice Interview Support
Real-time voice conversation powered by Vapi
Load-tested with 20+ concurrent sessions
Smooth turn-taking and latency-aware transcript syncing
Analytics & Progress Tracking
Firebase stores interview history, scores, and feedback
Users can monitor 10–20 point improvements across categories
Session-level insights (time per question, difficulty curve, improvement trends)
Modern Web Stack
Next.js + TypeScript for fast, scalable UI
Firebase for auth, data storage, and serverless backend
Google Gemini for intelligent interview generation
TailwindCSS + shadcn/ui (optional description—remove if unused)
🏗️ Architecture Overview
Next.js (UI + API Routes)
   │
   ├── Firebase (Auth, Firestore, Storage)
   │
   ├── Vapi Voice Engine (real-time voice sessions)
   │
   └── Google Gemini API
          ├── dynamic question generation
          ├── structured scoring & feedback
          └── interview transcript enrichment
📊 Tech Stack
Category	Technologies
Frontend	Next.js, TypeScript, TailwindCSS
Backend	Firebase Auth, Firestore, Cloud Functions
AI	Google Gemini APIs
Voice	Vapi Voice Session Engine
Tooling	ESLint, Prettier, Vercel Deployment
⚙️ Getting Started
1. Clone Repository
git clone https://github.com/your-username/echoprep.git
cd echoprep
2. Install Dependencies
npm install
3. Environment Variables
Create a .env.local file:
FIREBASE_API_KEY=...
FIREBASE_PROJECT_ID=...
GEMINI_API_KEY=...
VAPI_API_KEY=...
4. Run Locally
npm run dev
🧪 Load Testing
Simulated 20+ concurrent Vapi voice sessions
Verified:
Stable connection management
Transcript consistency
Minimal latency in Gemini-driven feedback loops
📈 Interview & Scoring Data
150+ interview runs logged
1,500+ Q&A turns analyzed
User improvements typically show 10–20 point jumps across scoring dimensions after repeated practice
