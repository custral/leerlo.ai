import { Calendar, Heart, Lightbulb } from 'lucide-react';

export function About() {
  return (
    <div className="bg-white">
      <section className="container-px max-w-4xl mx-auto py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-8 text-center">The Legend of <span className="text-orange-500">leerlo</span></h1>

        <div className="prose prose-slate prose-lg max-w-none">
          <div className="card p-8 md:p-12 mb-12 bg-orange-50/50 border-orange-100">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Lightbulb className="h-7 w-7 text-orange-500" /> The "Accident"
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              It was 3:14 AM on a Tuesday. Our founder, Barnaby "Bookworm" Custral, was trying to read *War and Peace* while eating a very spicy burrito and riding a unicycle. The cognitive load was too much. Barnaby realized that if he could just get the book to read itself into his brain at exactly 1.42x speed (his natural unicycling pace), the world would be a better place.
            </p>
            <p className="text-slate-700 leading-relaxed">
              He immediately grabbed a soldering iron, a broken Bluetooth headset, and a handful of rusty nails. Three hours and one minor electrical fire later, the first leerlo prototype was born. It didn't work, but it did make his microwave play jazz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card p-8">
              <h2 className="text-xl font-bold flex items-center gap-3 mb-4">
                <Calendar className="h-6 w-6 text-orange-500" /> The Dark Years
              </h2>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600">2024:</span>
                  <span>Barnaby spends 6 months trying to "QR scan" a sandwich. Results: inconclusive.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600">2025:</span>
                  <span>The team grows to 3 people and a very confused golden retriever. The dog is promoted to CTO.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-orange-600">2026:</span>
                  <span>We realize that surgical brain implants are "hard" and "legally questionable," so we decide to just make a website and see what happens.</span>
                </li>
              </ul>
            </div>
            <div className="card p-8 flex flex-col justify-center text-center bg-slate-900 text-white border-none">
              <h3 className="text-3xl font-bold text-orange-500 mb-2">25k</h3>
              <p className="text-slate-400 text-sm mb-6">Installation Fee</p>
              <p className="italic text-slate-300">"We need the money for Barnaby's unicycle collection."</p>
            </div>
          </div>

          <div className="card p-8 md:p-12 mb-12 border-blue-100 bg-blue-50/30">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
              <Heart className="h-7 w-7 text-blue-500" /> Our Mission
            </h2>
            <p className="text-slate-700 leading-relaxed">
              We believe that everyone deserves to have a robotic voice narrating their lives—especially the boring parts. While leerlo is currently focused on books, we have secret plans to expand into "Shower Thoughts Sync" and "Awkward Social Interaction Subtitles."
            </p>
          </div>

          <div className="text-center py-12">
            <h2 className="text-3xl font-bold mb-6">Want to meet the team?</h2>
            <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
              Unfortunately, the team is currently hiding from several medical regulatory boards and one very angry librarian. But you can still support our "research."
            </p>
            <a href="https://custral.com" className="btn btn-primary px-10 py-4 text-lg">Support Custral.com</a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
          <p>This entire story is a work of fiction. No unicycles were harmed in the making of this landing page.</p>
          <p className="mt-2">This is a fake idea made by <a className="underline hover:text-orange-500" href="https://custral.com" target="_blank" rel="noreferrer">Custral.com</a></p>
        </div>
      </section>
    </div>
  );
}
