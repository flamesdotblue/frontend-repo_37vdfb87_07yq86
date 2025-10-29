import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Services from './components/Services';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="font-inter text-zinc-900">
      <Navbar />
      <main>
        <Hero />
        <Industries />
        <Services />

        <section id="contact" className="border-t border-zinc-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold">Let’s build what’s next</h3>
                <p className="mt-2 text-zinc-600">Reach out to explore how GrowthArise can help accelerate your transformation.</p>
                <div className="mt-6 space-y-2 text-zinc-700">
                  <div className="inline-flex items-center gap-2"><Mail size={18}/> hello@growtharise.com</div>
                  <div className="inline-flex items-center gap-2"><Phone size={18}/> +91 00000 00000</div>
                  <div className="inline-flex items-center gap-2"><MapPin size={18}/> Bengaluru, India</div>
                  <a href="https://www.linkedin.com/company/growtharise" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-900 hover:underline"><Linkedin size={18}/> LinkedIn</a>
                </div>
              </div>

              <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required placeholder="Full name" className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                <input required type="email" placeholder="Work email" className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                <input placeholder="Company" className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                <input placeholder="Phone" className="w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                <textarea placeholder="Tell us about your initiative" rows={4} className="sm:col-span-2 w-full rounded-lg border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-zinc-900" />
                <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">Request consultation</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="inline-block h-6 w-6 rounded bg-gradient-to-tr from-indigo-600 to-cyan-400" />
            <span className="font-semibold">GrowthArise</span>
          </div>
          <p className="text-sm text-zinc-600">© {new Date().getFullYear()} GrowthArise. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
