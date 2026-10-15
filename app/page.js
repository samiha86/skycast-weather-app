
"use client";

import { useEffect, useState } from "react";

async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=24.00&longitude=90.42&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&hourly=temperature_2m&forecast_days=1&timezone=Asia%2FDhaka"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return response.json();
}

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeather(data.current);
        setForecast(data.hourly);
      })
      .catch(() => {
        setError("Weather data could not be loaded. Please try again.");
      });
  }, []);

  const localTime = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Dhaka",
    hour: "2-digit",
    minute: "2-digit",
  });

  const weatherDescription = (code) => {
    if (code === 0) return "Clear Sky";
    if ([1, 2].includes(code)) return "Partly Cloudy";
    if (code === 3) return "Overcast";
    if ([45, 48].includes(code)) return "Foggy";
    if ([51, 53, 55, 56, 57].includes(code)) return "Drizzle";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "Rainy";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "Snowy";
    if ([95, 96, 99].includes(code)) return "Thunderstorm";
    return "Current Weather";
  };

  const weatherIcon = (code) => {
    if (code === 0) return "☀️";
    if ([1, 2, 3].includes(code)) return "⛅";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
    if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌤️";
  };

  const currentHour = forecast
    ? Math.max(
        0,
        forecast.time.findIndex(
          (time) => new Date(time).getHours() === new Date().getHours()
        )
      )
    : 0;

  const hourlyItems = forecast
    ? [0, 1, 2, 3].map((offset) => {
        const index = Math.min(currentHour + offset, forecast.time.length - 1);

        return {
          time: forecast.time[index],
          temperature: forecast.temperature_2m[index],
        };
      })
    : [];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-6 py-5 md:px-12">
        <a href="/" className="text-2xl font-bold text-sky-400">
          SkyCast
        </a>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-300 md:gap-6">
          <a href="/" className="transition hover:text-sky-400">Home</a>
          <a href="/about" className="transition hover:text-sky-400">About</a>
          <a href="/services" className="transition hover:text-sky-400">Services</a>
          <a href="/contact" className="transition hover:text-sky-400">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-6 py-16 text-center md:py-20">
        <p className="mb-4 font-semibold tracking-[0.2em] text-sky-300">
          YOUR DAILY WEATHER COMPANION
        </p>

        <h1 className="text-4xl font-extrabold md:text-6xl">
          Discover Your Weather
        </h1>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-300">
          Stay updated with temperature, humidity, wind speed and hourly
          weather forecasts to plan your day with confidence.
        </p>

        {/* Current Weather */}
        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/15 to-indigo-500/10 p-6 shadow-2xl shadow-sky-950/30 md:p-8">
          <p className="text-slate-300">Current Weather</p>

          {error ? (
            <p className="mt-6 text-rose-300">{error}</p>
          ) : weather ? (
            <>
              <div className="my-5 text-7xl">
                {weatherIcon(weather.weather_code)}
              </div>

              <h2 className="text-5xl font-bold">
                {weather.temperature_2m}°C
              </h2>

              <p className="mt-3 text-lg text-sky-200">
                {weatherDescription(weather.weather_code)}
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Gazipur area · Updated weather data
              </p>
            </>
          ) : (
            <p className="my-10 text-slate-300">Loading weather...</p>
          )}

          {/* Weather Details */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-3xl">💧</p>
              <p className="mt-3 text-slate-400">Humidity</p>
              <p className="mt-1 text-xl font-semibold">
                {weather ? `${weather.relative_humidity_2m}%` : "--%"}
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-3xl">💨</p>
              <p className="mt-3 text-slate-400">Wind Speed</p>
              <p className="mt-1 text-xl font-semibold">
                {weather ? `${weather.wind_speed_10m} km/h` : "-- km/h"}
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <p className="text-3xl">🕒</p>
              <p className="mt-3 text-slate-400">Local Time</p>
              <p className="mt-1 text-xl font-semibold">{localTime}</p>
              <p className="mt-1 text-xs text-slate-500">Bangladesh Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hourly Forecast */}
      <section className="px-6 py-12 md:px-12">
        <h2 className="mb-3 text-center text-3xl font-bold">
          Hourly Forecast
        </h2>

        <p className="mb-8 text-center text-slate-400">
          Temperature forecast for the coming hours
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {hourlyItems.length > 0 ? (
            hourlyItems.map((item, index) => (
              <div
                key={`${item.time}-${index}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:-translate-y-1 hover:bg-white/10"
              >
                <p className="text-slate-300">
                  {index === 0
                    ? "Now"
                    : new Date(item.time).toLocaleTimeString("en-GB", {
                        timeZone: "Asia/Dhaka",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                </p>

                <p className="my-4 text-3xl">🌤️</p>

                <p className="text-2xl font-bold">
                  {item.temperature}°C
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-slate-400">
              Loading forecast...
            </p>
          )}
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-bold">About SkyCast</h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
          SkyCast is a simple and user-friendly weather application that
          provides current weather conditions and hourly temperature
          forecasts. Our goal is to help you make informed daily plans
          with accessible weather information.
        </p>

        <a
          href="/about"
          className="mt-7 inline-block rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-400"
        >
          Learn More
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-slate-400">
        <p>© 2026 SkyCast. Weather for every day.</p>
        <p className="mt-2">Powered by Open-Meteo Weather API</p>
      </footer>
    </main>
  );
}
