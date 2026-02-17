import { Bluetooth, QrCode, Volume2, Settings, Shield, Zap, Eye, Ghost, Coffee } from 'lucide-react';

function Feature({icon: Icon, title, desc}: {icon: any, title: string, desc: string}) {
  return (
    <div className="card p-8 hover:border-orange-200 transition-colors group">
      <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all">
        <Icon className="h-6 w-6"/>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

export function Features() {
  return (
    <div className="bg-white">
      <section className="container-px max-w-7xl mx-auto py-20">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">Cooler than a <span className="text-orange-500">brain freeze.</span></h1>
          <p className="text-xl text-slate-600">We didn't just stop at "reading." We pushed the limits of fictional science to bring you features you didn't know you didn't want.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            icon={QrCode}
            title="Instant QR Hallucination"
            desc="Our scanner is so fast, it often identifies books that haven't even been written yet. It once scanned a blank piece of paper and read me the entire script of Shrek 5."
          />
          <Feature
            icon={Bluetooth}
            title="Bluetooth 12.0 (Fake)"
            desc="Connect to your brain with zero latency. It's so fast, the app starts reading the next sentence before you've even thought about turning the page."
          />
          <Feature
            icon={Volume2}
            title="Celebrity Soul-Swap"
            desc="Choose from 5,000+ voices. Ever wanted a medieval peasant to read you a cookbook? Or a grumpy cat to narrate your tax returns? Now you can."
          />
          <Feature
            icon={Zap}
            title="Overclocked Reading"
            desc="Switch to 'Turbo Mode' to read at 5,000 words per minute. Warning: May cause temporary loss of ability to speak in anything but haikus."
          />
          <Feature
            icon={Eye}
            title="Gaze Tracking 3000"
            desc="The app knows exactly where you're looking. If you look at a snack instead of the book, the narrator will judge you audibly."
          />
          <Feature
            icon={Ghost}
            title="Dream-Reading Sync"
            desc="Keep reading even while you sleep. Our 'Alpha-Wave Sync' pumps high-quality literature directly into your subconscious. Wake up with a PhD in nothing."
          />
          <Feature
            icon={Coffee}
            title="Caffeine Injection Link"
            desc="If the app detects you're getting sleepy during a boring chapter, it triggers a fictional adrenaline rush via the Sync-Node™."
          />
          <Feature
            icon={Settings}
            title="Sarcasm Slider"
            desc="Adjust the narrator's attitude from 'Helpful Librarian' to 'Passive-Aggressive Teenager' with a single swipe."
          />
          <Feature
            icon={Shield}
            title="Mind-Block Privacy"
            desc="Worried about us reading your thoughts? Don't be. We only care about the thoughts related to reading. The rest of your weird secrets are safe (mostly)."
          />
        </div>
      </section>

      <section className="bg-slate-900 text-white py-24">
        <div className="container-px max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to transcend reality?</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">The $25,000 fee is a small price to pay for the ability to hear a voice in your head that you actually paid for.</p>
          <a href="https://custral.com" className="btn bg-orange-500 text-white hover:bg-orange-600 px-10 py-4 text-lg font-bold border-none">Start Installation</a>
        </div>
      </section>
    </div>
  );
}
