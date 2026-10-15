
export default function Services() {
  const services = [
    {
      icon: "🌡️",
      title: "Current Temperature",
      description:
        "Check the latest temperature from weather data.",
    },
    {
      icon: "💧",
      title: "Humidity Information",
      description:
        "View humidity levels to understand the air conditions.",
    },
    {
      icon: "💨",
      title: "Wind Speed",
      description:
        "Explore wind speed information for daily planning.",
    },
    {
      icon: "🌤️",
      title: "Hourly Forecast",
      description:
        "See upcoming hourly temperatures and plan ahead.",
    },
    {
      icon: "🕒",
      title: "Local Time",
      description:
        "View local time in the Bangladesh time zone.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "Use SkyCast on desktops, tablets, and mobile devices.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white md:px-12">
      <header className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="/" className="text-2xl font-bold text-sky-400">
          SkyCast
        </a>

        <nav className="flex gap-4 text-sm text-slate-300">
          <a href="/" className="hover:text-sky-400">Home</a>
          <a href="/about" className="hover:text-sky-400">About</a>
          <a href="/contact" className="hover:text-sky-400">Contact</a>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl py-16 text-center">
        <p className="font-semibold tracking-widest text-sky-300">
          WHAT WE OFFER
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Our Services
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          SkyCast provides useful weather information to help you
          understand current conditions and plan your day.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 text-left transition hover:-translate-y-1 hover:bg-white/10"
            >
              <p className="text-4xl">{service.icon}</p>

              <h2 className="mt-5 text-xl font-bold text-sky-300">
                {service.title}
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-full bg-sky-500 px-6 py-3 font-semibold hover:bg-sky-400"
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
