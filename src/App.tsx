import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Landing } from './pages/Landing';
import { Features } from './pages/Features';
import { About } from './pages/About';
import { Pricing } from './pages/Pricing';
import { Product } from './pages/Product';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="*" element={
              <div className="container-px py-24 text-center">
                <h1 className="text-3xl font-semibold mb-2">Page not found</h1>
                <p className="mb-6 text-slate-600">Let’s get you back to reading.</p>
                <Link className="btn btn-primary" to="/">Go Home</Link>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
