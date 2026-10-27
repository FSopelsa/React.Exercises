# React Exercises

A collection of React exercises. Exercise 1 sets up a React app with Vite, and exercise 2 adds a page styled with Tailwind CSS.

## Getting started

You need npm and Node.js 20.19 or later within the 20.x series, or Node.js 22.12 or later.

Install the dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open the local URL shown in the terminal to see the page. Press `Ctrl+C` to stop the server.

The page content and Tailwind utility classes are in `src/App.jsx`. Tailwind is imported in `src/index.css` and configured in `vite.config.js`. The example button demonstrates styling and has no action.

## Checks

```bash
npm run lint
npm run build
```

To view the production build locally, run `npm run preview` after building and open the URL shown in the terminal.
