# React + Tailwind v4 — Quick Commands

## 1. Create React (Vite)

```bash
npm create vite@latest my-app
cd my-app
npm install

```

Choose → **React → JavaScript**

---

## 2. Install Tailwind v4 (Vite plugin)

```bash
npm install tailwindcss @tailwindcss/vite

```

---

## 3. Configure Vite

Replace **vite.config.js** with:

```jsx
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

```

---

## 4. Add Tailwind in CSS

**src/index.css**

```css
@import "tailwindcss";

```

---

## 5. Import CSS

**src/main.jsx**

```jsx
import "./index.css";

```

---

## 6. Run Project

```bash
npm run dev

```

---

## 7. Test Tailwind (Optional)

```jsx
export default function App() {
  return (
    <div className="h-screen flex items-center justify-center bg-blue-500">
      <h1 className="text-3xl font-bold text-white">
        Tailwind Working
      </h1>
    </div>
  );
}

```

---

# That’s the Full Flow (Minimal)

Create → Install → Configure → Run.
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->
