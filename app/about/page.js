
export default function About() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <header className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="/" className="text-2xl font-bold text-sky-400">
          SkyCast
        </a>
        <a href="/" className="text-slate-300 hover:text-sky-400">
          Home
        </a>
      </header>

      <section className="mx-auto max-w-3xl py-20 text-center">
        <p className="mb-4 font-semibold tracking-widest text-sky-300">
          ABOUT US
        </p>

        <h1 className="text-4xl font-bold md:text-5xl">
          About SkyCast
        </h1>

        <p className="mt-6 leading-8 text-slate-300">
          SkyCast is a user-friendly weather application designed to
          provide current weather conditions and hourly temperature
          forecasts. It helps users check temperature, humidity,
          wind speed, and local time to plan their daily activities.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-semibold text-sky-300">
            Our Mission
          </h2>
          <p className="mt-3 leading-7 text-slate-300">
            Our mission is to make weather information simple,
            accessible, and useful for everyone.
          </p>
        </div>

        <a
          href="/"
          className="mt-8 inline-block rounded-full bg-sky-500 px-6 py-3 font-semibold hover:bg-sky-400"
        >
          Back to Home
        </a>
      </section>

      <footer className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © 2026 SkyCast. Weather for every day.
      </footer>
    </main>
  );
}
