function App() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to React Exercises
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          This page is styled with Tailwind CSS.
        </p>

        <article className="mt-8 rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold">Learning Tailwind CSS</h2>
          <p className="mt-3 text-slate-600">
            Utility classes make it easy to add spacing, colors, and typography.
          </p>
          <button
            type="button"
            className="mt-6 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Example button
          </button>
        </article>
      </div>
    </main>
  )
}

export default App
