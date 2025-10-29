import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur">
            Enterprise Technology Solutions
          </span>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl">
            GrowthArise — modernizing enterprises with cloud, data and AI
          </h1>
          <p className="mt-4 text-lg text-zinc-700">
            We help organizations reimagine operations, engineer resilient platforms, and unlock growth through human-centric technology.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#industries" className="inline-flex items-center rounded-lg bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
              Select your industry
            </a>
            <a href="#impact" className="inline-flex items-center rounded-lg bg-white/80 px-5 py-3 text-zinc-900 backdrop-blur hover:bg-white">
              Discover our impact
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
