import { motion } from 'framer-motion';
import { Bluetooth, Zap, Shield, Cpu, Activity, Info, Link as LinkIcon, Smartphone } from 'lucide-react';

export function Product() {
  return (
    <div className="bg-white">
      {/* Product Hero */}
      <section className="container-px max-w-7xl mx-auto py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6"
          >
            <Cpu className="h-4 w-4" /> Neural Hardware v2.1
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-extrabold tracking-tight mb-6"
          >
            The <span className="text-orange-500">Sync-Node™</span> Brain Implant
          </motion.h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            The world's first (and only) 100% fictional consumer-grade brain implant designed specifically for readers. It's titanium-coated, Bluetooth-enabled, and sits comfortably between your prefrontal cortex and your imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://custral.com" className="btn btn-primary px-8 py-4 text-lg">Reserve Installation Slot</a>
            <div className="text-sm text-slate-500 self-center">Next available appointment: April 2042</div>
          </div>
        </div>
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 aspect-square bg-slate-100 rounded-full flex items-center justify-center border-8 border-slate-50 shadow-inner"
          >
            {/* Fake Product Visual */}
            <div className="w-48 h-48 bg-slate-900 rounded-3xl shadow-2xl flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
              <Cpu className="h-24 w-24 text-white relative z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute bottom-2 right-2 flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75" />
              </div>
            </div>
            {/* Tech Specs Floating */}
            <div className="absolute top-0 right-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 -rotate-6">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Weight</p>
              <p className="text-lg font-bold">0.42 Grams</p>
            </div>
            <div className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 rotate-12">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Battery Life</p>
              <p className="text-lg font-bold">Infinite*</p>
            </div>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl -z-10 opacity-60" />
        </div>
      </section>

      {/* Interactive Section */}
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="container-px max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How it interacts with the app</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A seamless dance between hardware, software, and your neurons.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <LinkIcon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sync-Bridge Link</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                The Sync-Node™ establishes a persistent, low-energy Bluetooth 12.0 connection to the leerlo app. It broadcasts your visual focus point 240 times per second.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Activity className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time telemetry</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                As your eyes move across the page, the app receives the "Current Word ID" and adjusts the audio playback speed dynamically to match your eye movement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Voice Feedback Loop</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                You can adjust voice pitch, timbre, and sarcasm levels directly from the app. The Sync-Node™ then vibrates your eardrum wirelessly via "Bone-Conductance-by-Proxy".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Technical Details */}
      <section className="container-px max-w-4xl mx-auto py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Specifications</h2>
        <div className="space-y-4">
          {[
            { q: "Is it waterproof?", a: "Yes, up to 50 meters. Please don't read under water though, it ruins the pages of the book." },
            { q: "How do I charge it?", a: "The Sync-Node™ is powered by the kinetic energy of your thoughts. If you stop thinking, it stops working. (Don't stop thinking)." },
            { q: "What if the Bluetooth disconnects?", a: "The voice will simply say 'Disconnected' very loudly directly into your brain until you reconnect or restart your head." },
            { q: "Can it be hacked?", a: "We use 256-bit AES encryption. The worst a hacker could do is make you read everything in the voice of a very disappointed pirate." },
            { q: "Does it work with audiobooks?", a: "That would be redundant. It's like putting a hat on a hat. A brain-implant hat." }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200">
              <h4 className="font-bold flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-orange-500" /> {item.q}
              </h4>
              <p className="text-slate-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-xs text-slate-400 italic">
          *Infinite battery assumes at least 4 active thoughts per minute. Kinetic charging may vary based on IQ and caffeine intake.
        </p>
      </section>
    </div>
  );
}
