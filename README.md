# 🎸 W-Festival Project

A modern and responsive festival webpage interface built with React, Vite, and Tailwind CSS.  
The application displays a horizontally scrollable festival webpage with smooth navigation, clean UI components, and a responsive layout.

---

## 🚀 Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Lucide React
- React Horizontal Scrolling Menu

---

## 📦 Installation

```bash
git clone larimoreira21/w-festival
cd watch-project
npm install
```

---

## 💻 Development

Start the development server:

```bash
npm run dev
```

The app will be available at:

```
http://localhost:3000
```

---

## 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📁 Project Structure

Imports use the `@/` alias (e.g. `@/components/ui`, `@/theme`).

```
src
├── components/
│   ├── ui/                    # Design system
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── CardMedia.tsx
│   │   ├── HorizontalScrollSection.tsx
│   │   └── index.ts
│   ├── Navbar/
│   │   ├── index.tsx
│   │   └── components/
│   └── Footer/
│       └── index.tsx
├── pages/
│   └── HomePage/
│       ├── index.tsx          # Page composition
│       ├── components/        # Section components
│       └── helpers/           # Page-level helpers
├── theme/
│   ├── colors.ts
│   └── index.ts
├── helpers/
│   └── theme.ts
├── assets/                     # Images and icons
├── index.css                   # Global styles
├── App.tsx                     # Root layout & routing
└── main.tsx                    # Entry point
```

---

## 🎨 Styling

The UI is built with **Tailwind CSS v4** using utility-first classes and responsive design patterns.  
Custom tokens and opacity utilities are used to achieve modern overlay and glass effects.

---

## 🎯 Icons

Icons are provided by **Lucide React**.

---

## 🗒️ Available Scripts

| Script            | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start development server           |
| `npm run build`   | TypeScript + Vite production build |
| `npm run preview` | Preview production build           |
| `npm run lint`    | Run ESLint                         |
| `npm run format`  | Format code with Prettier          |

---

## ⚙️ Requirements

- Node.js 20.x+
- npm 9+
