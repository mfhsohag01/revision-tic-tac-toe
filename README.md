# 🎮 Tic-Tac-Toe — React

একটা stylish, fully functional Tic-Tac-Toe game — React state lifting এবং time travel feature সহ।

🔗 **Live Demo:** [visionary-torte-ed4b35.netlify.app](https://visionary-torte-ed4b35.netlify.app)

## ✨ Features

- ✅ Classic Tic-Tac-Toe gameplay (X vs O)
- ✅ Win detection (৮টা সম্ভাব্য winning line চেক করে)
- ✅ **Time Travel** — পুরনো যেকোনো move-এ ফিরে যাওয়া যায়
- ✅ Move history list
- ✅ Dark glassmorphism UI with neon glow effects

## 🛠️ Built With

- React (Vite)
- Tailwind CSS

## 🚀 Getting Started

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npm run dev
```

## 📁 Project Structure

\`\`\`
src/
├── App.jsx
├── Game.jsx # State owner (history, currentMove)
├── Square.jsx # Board logic (winner check, click handler)
├── SquareFragment.jsx # Individual cell UI
\`\`\`

## 📝 Learnings

এই প্রজেক্টে শেখা মূল React concept:

- State lifting (child → parent)
- Props drilling
- Derived state (`xIsNext` computed from `currentMove`)
- Immutable array updates (`slice`, spread)
