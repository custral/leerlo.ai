import { Bluetooth, Brain, QrCode, Volume2, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function PhoneMock({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[3rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden">
      {/* Dynamic Island-ish */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />
      <div className="h-full w-full bg-slate-50 relative overflow-hidden flex flex-col pt-8">
        {children}
      </div>
    </div>
  );
}

function FakeScreenshotQR() {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          <QrCode className="h-4 w-4 text-orange-600" />
        </div>
        <span className="font-bold text-slate-800">Scanner</span>
      </div>
      <div className="flex-1 border-2 border-dashed border-slate-200 rounded-3xl grid place-items-center bg-white/50 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent" />
        <div className="bg-white p-4 rounded-2xl shadow-lg border border-slate-100 z-10 scale-110">
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({length:25}).map((_,i)=> (
              <div key={i} className={`h-4 w-4 rounded-sm ${[0,4,20,24,6,18,12,2,22,10,14].includes(i)? 'bg-slate-900':'bg-slate-200'}`} />
            ))}
          </div>
        </div>
        <div className="mt-48 text-center px-4">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Align with book</p>
          <p className="text-[10px] text-slate-500">Target the leerlo QR on the back cover</p>
        </div>
      </div>
    </div>
  );
}

function FakeScreenshotReader() {
  return (
    <div className="flex-1 flex flex-col p-6">
      <div className="flex items-center justify-between mb-8">
        <span className="font-bold text-slate-800">Now Playing</span>
        <Bluetooth className="h-4 w-4 text-blue-500 animate-pulse" />
      </div>

      <div className="flex-1 bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <div className="w-20 h-28 bg-orange-50 rounded-lg mb-4 mx-auto shadow-sm border border-orange-100 flex items-center justify-center">
          <BookOpen className="h-10 w-10 text-orange-200" />
        </div>
        <div className="h-3 w-32 bg-slate-100 rounded mx-auto mb-2" />
        <div className="h-2 w-20 bg-slate-50 rounded mx-auto mb-6" />

        <div className="space-y-3 mb-8">
          <div className="h-2 w-full bg-slate-100 rounded-full" />
          <div className="h-2 w-full bg-slate-100 rounded-full" />
          <div className="h-2 w-3/4 bg-orange-200 rounded-full" />
          <div className="h-2 w-full bg-slate-50 rounded-full" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="w-8 h-8 rounded-full bg-slate-100" />
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
            <Volume2 className="h-6 w-6" />
          </div>
          <div className="w-8 h-8 rounded-full bg-slate-100" />
        </div>
      </div>

      <div className="mt-4 bg-blue-50 p-3 rounded-2xl flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
          <Brain className="h-4 w-4 text-blue-600" />
        </div>
        <div>
          <p className="text-[10px] font-bold text-blue-900">Neural Sync Active</p>
          <p className="text-[9px] text-blue-700">Reading pace: 245 wpm</p>
        </div>
      </div>
    </div>
  );
}

const BookOpen = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5S19.832 5.477 21 6.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

export function Landing() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container-px max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-semibold mb-6"
            >
              <Sparkles className="h-4 w-4" /> Now in Fictional Beta
            </motion.div>
            <motion.h1
              initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1}}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[1.1]"
            >
              Your books, <br />
              <span className="text-orange-500">your pace.</span>
            </motion.h1>
            <motion.p
              initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2}}
              className="mt-6 text-xl text-slate-600 max-w-xl leading-relaxed"
            >
              leerlo uses advanced (and fictional) neural-sync technology to read your books aloud exactly as you read them. No more falling behind, no more getting ahead.
            </motion.p>
            <motion.div
              initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.3}}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="https://custral.com" className="btn btn-primary px-8 py-4 text-lg">Get Started Now</a>
              <Link to="/features" className="btn btn-ghost px-8 py-4 text-lg border border-slate-200">See how it works</Link>
            </motion.div>
            <div className="mt-8 flex items-center gap-4 text-slate-500">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <p className="text-sm font-medium">Joined by 10,000+ imaginary readers</p>
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration:0.8}}
              className="flex justify-center lg:justify-end gap-6"
            >
              <div className="pt-12">
                <PhoneMock>
                  <FakeScreenshotQR/>
                </PhoneMock>
              </div>
              <div>
                <PhoneMock>
                  <FakeScreenshotReader/>
                </PhoneMock>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <section className="bg-slate-900 py-12 text-white overflow-hidden">
        <div className="container-px max-w-7xl mx-auto flex flex-wrap justify-around gap-8 opacity-60 grayscale brightness-200">
          <span className="text-xl font-bold italic tracking-widest">NEW YORK MOCK</span>
          <span className="text-xl font-bold tracking-tighter uppercase">Fictional Times</span>
          <span className="text-xl font-bold tracking-tight">The Reading Daily</span>
          <span className="text-xl font-bold tracking-widest">BRAINTECH</span>
        </div>
      </section>

      {/* HOW IT WORKS SUMMARY */}
      <section className="py-24 bg-white">
        <div className="container-px max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Three steps to immersion.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: QrCode, title: "Scan the Book", desc: "Every leerlo-compatible book has a unique brain-sync QR code on the jacket." },
              { icon: Bluetooth, title: "Sync the Device", desc: "Connect your fictional neural implant via Bluetooth Low Energy." },
              { icon: Brain, title: "Read & Listen", desc: "Start reading. The app detects your pace and matches the narration perfectly." }
            ].map((step, i) => (
              <div key={i} className="text-center px-4">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LEERLO? */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container-px max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <ShieldCheck className="h-8 w-8 text-green-500 mb-4" />
                  <h4 className="font-bold">Total Privacy</h4>
                  <p className="text-xs text-slate-500 mt-2">Your brain waves stay in your head.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <Zap className="h-8 w-8 text-yellow-500 mb-4" />
                  <h4 className="font-bold">Low Latency</h4>
                  <p className="text-xs text-slate-500 mt-2">Zero lag between your eye and the voice.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <Globe className="h-8 w-8 text-blue-500 mb-4" />
                  <h4 className="font-bold">Every Language</h4>
                  <p className="text-xs text-slate-500 mt-2">Translated in real-time by fictional AI.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                  <Volume2 className="h-8 w-8 text-purple-500 mb-4" />
                  <h4 className="font-bold">Custom Voices</h4>
                  <p className="text-xs text-slate-500 mt-2">Sounds like you, or your favorite actor.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Built for the modern reader.</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Reading is a solo journey, but it doesn't have to be quiet. leerlo provides the soundtrack to your imagination, perfectly timed to your unique neural signature.
              </p>
              <ul className="space-y-4">
                {["99.9% sync accuracy", "Compatible with all hardcovers", "Fictional surgical success guaranteed"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-semibold text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center text-white text-[10px]">✓</div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/pricing" className="btn btn-primary px-8">View Pricing Plans</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container-px max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-16">What our (real) users are saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "I used to be able to read, but now that I have the implant I can't read at all. Luckily, the app helps with that by reading the book out loud to me. It's a closed loop of efficiency.",
                author: "Gary B.",
                title: "Former Literate"
              },
              {
                text: "The $25,000 installation fee was a bit steep, but they let me pay in 4,000 easy installments of $6.25. My grandkids will still be paying for my love of sci-fi, and I think that's beautiful.",
                author: "Mildred S.",
                title: "Debt-Driven Reader"
              },
              {
                text: "Sometimes the Bluetooth disconnects and the app just starts playing Swedish death metal directly into my brain. It doesn't help with my historical romance novels, but I've never been more awake.",
                author: "Chad V.",
                title: "Accidental Metalhead"
              },
              {
                text: "The 'Sync' is so accurate that the app finished the book three days before I did. It told me the ending while I was still on chapter two. Saved me a lot of time, honestly.",
                author: "Sarah P.",
                title: "Efficiency Expert"
              },
              {
                text: "I accidentally scanned a cereal box and the app read me the nutritional facts in the voice of Morgan Freeman. It was the most spiritual experience I've had with Fiber One.",
                author: "Kevin L.",
                title: "Breakfast Enthusiast"
              },
              {
                text: "My brain implant keeps picking up my neighbor's smart fridge. I now know exactly when they are low on milk, and I can hear the milk's inner monologue. 5 stars.",
                author: "Brenda M.",
                title: "Dairy Psychic"
              }
            ].map((t, i) => (
              <div key={i} className="card p-8 bg-slate-50 border-none">
                <p className="text-slate-700 italic mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="get-started" className="container-px max-w-7xl mx-auto py-24 text-center">
        <div className="max-w-3xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-32 -mb-32" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join the reading revolution.</h2>
          <p className="text-slate-400 text-lg mb-10">
            Secure your installation date today and transform your relationship with books forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://custral.com" className="btn bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 text-lg font-bold">
              Get Started
            </a>
            <Link to="/about" className="btn btn-ghost text-white px-8 py-4 text-lg border border-white/20">
              Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
