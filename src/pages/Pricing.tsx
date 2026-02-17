import { Check, X, Shield, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingTier = ({ 
  name, 
  price, 
  installation, 
  features, 
  unavailable, 
  popular = false 
}: { 
  name: string, 
  price: string, 
  installation: string, 
  features: string[], 
  unavailable: string[], 
  popular?: boolean 
}) => (
  <div className={`relative p-8 rounded-3xl border ${popular ? 'border-orange-500 bg-white shadow-xl' : 'border-slate-200 bg-slate-50'}`}>
    {popular && (
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
        Most Immersive
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <div className="flex items-baseline gap-1 mb-1">
      <span className="text-4xl font-extrabold tracking-tight">{price}</span>
      <span className="text-slate-500 font-medium">/month</span>
    </div>
    <div className="text-sm text-slate-500 mb-6 font-medium">
      + {installation} installation fee
    </div>
    
    <div className="space-y-4 mb-8">
      {features.map((feature, i) => (
        <div key={i} className="flex items-start gap-3">
          <Check className="h-5 w-5 text-orange-500 shrink-0" />
          <span className="text-sm text-slate-700">{feature}</span>
        </div>
      ))}
      {unavailable.map((feature, i) => (
        <div key={i} className="flex items-start gap-3 opacity-40">
          <X className="h-5 w-5 text-slate-400 shrink-0" />
          <span className="text-sm text-slate-500 line-through">{feature}</span>
        </div>
      ))}
    </div>
    
    <a 
      href="https://custral.com" 
      className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
    >
      Reserve Your Slot
    </a>
  </div>
);

export function Pricing() {
  return (
    <div className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container-px max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
          >
            Invest in your mind.
          </motion.h1>
          <p className="text-lg text-slate-600">
            A subscription to leerlo is more than just access to an app; it's a lifelong commitment to seamless reading through fictional neural integration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-24">
          <PricingTier 
            name="Personal Reader"
            price="$9.99"
            installation="$25,000"
            features={[
              "Standard QR book scanning",
              "Mind-sync Bluetooth tech",
              "Standard Voice pack",
              "Unlimited reading logs",
              "24/7 fictional support"
            ]}
            unavailable={[
              "Family mind-sharing (fictional)",
              "Custom voice cloning",
              "Direct cerebral downloads"
            ]}
          />
          <PricingTier 
            name="Neuro-Max"
            price="$49.99"
            installation="$25,000"
            popular={true}
            features={[
              "All Personal Reader features",
              "Custom voice cloning (AI)",
              "Family mind-sharing protocol",
              "Priority neural bandwidth",
              "Pre-release fictional beta access",
              "Direct cerebral downloads"
            ]}
            unavailable={[]}
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-16">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
              <Cpu className="text-orange-600 h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold">The Installation Fee</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              The one-time $25,000 fee covers the fictional surgical procedure required to install the mind-control device. Performed by our imaginary robots, the process is completely hypothetical.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
              <Shield className="text-orange-600 h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold">Data Privacy</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              We take fictional privacy seriously. Your brain waves are encrypted with imaginary algorithms and never sold to third-party hallucinated advertisers.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
              <MessageSquare className="text-orange-600 h-6 w-6" />
            </div>
            <h4 className="text-xl font-bold">Billing Cycles</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Subscription is billed monthly. Cancel anytime via our nonexistent dashboard. No refunds on surgical installation once the fictional surgery has begun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
