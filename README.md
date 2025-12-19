# Monthly Surprise Calendar

> ⚠️ **WIP – Not Production Ready**
>
> This project is a work in progress.
> Use at your own risk – breaking changes may occur without notice.

This repository is a **SvelteKit template** for creating a **monthly surprise calendar**.

Each month unlocks one new “door” (starting on the 1st of the month), while previously unlocked surprises remain accessible.  
The template is designed to be easily forked and customized for personal projects (e.g. as a private gift).

---

## ✨ Features

- ✅ **SvelteKit** with TypeScript (Runes mode)
- ✅ **TailwindCSS** (mobile-first)
- ✅ **Static site generation** using `@sveltejs/adapter-static`
- ✅ **Time-based unlock logic** (1st of each month)
- ✅ **Reusable, self-contained calendar components**
- ✅ **Example content** (image + text placeholders)

---

## 🚀 Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the development server

```bash
npm run dev
```

Then visit: [http://localhost:5173](http://localhost:5173)

## 📂 Project Structure

```bash
src/
├── routes/
│       └── +page.svelte        # Calendar page
├── lib/
│   ├── components/             # Calendar components
│   │   ├── MonthCalendar.svelte
│   │   ├── MonthSurpriseModal.svelte
│   │   └── MonthDoor.svelte
│   ├── data/
│   │   └── month-surprises.ts  # Example content (replace in forks)
│   └── utils/
│       └── month-unlock.ts     # Unlock logic
├── styles/
│   └── app.css                 # Tailwind base styles
static/
└── example-surprise.jpg        # Placeholder image
```

## 🛠 Customization

### Monthly content

Replace the example data in: `src/lib/data/month-surprises.ts`

### Styling

TailwindCSS is preconfigured:

- [src/styles/app.css](src/styles/app.css)
- [tailwind.config.cjs](tailwind.config.cjs)

## 📌 Purpose

This repository is intended as:

- a public example project

- a template for personal forks

Feel free to adapt it to your own needs.
