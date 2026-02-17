import { Link, NavLink } from 'react-router-dom';
import { BookOpen, Sparkles } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="container-px max-w-7xl mx-auto h-16 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-orange-500" />
          <span className="font-semibold">leerlo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/features" className={({isActive}) => isActive ? 'text-orange-600 font-medium' : 'text-slate-700 hover:text-slate-900'}>
            Features
          </NavLink>
          <NavLink to="/product" className={({isActive}) => isActive ? 'text-orange-600 font-medium' : 'text-slate-700 hover:text-slate-900'}>
            Product
          </NavLink>
          <NavLink to="/pricing" className={({isActive}) => isActive ? 'text-orange-600 font-medium' : 'text-slate-700 hover:text-slate-900'}>
            Pricing
          </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-orange-600 font-medium' : 'text-slate-700 hover:text-slate-900'}>
            About
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://custral.com" className="btn btn-primary">
            <Sparkles className="h-4 w-4" /> Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
