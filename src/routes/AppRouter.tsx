import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/BackToTop';
import PageLoader from '../components/PageLoader/PageLoader';
import ScrollToTop from './ScrollToTop';

// Lazy-loaded pages for code splitting + per-page CSS chunks
const Home          = lazy(() => import('../pages/Home/Home'));
const Services      = lazy(() => import('../pages/Services/Services'));
const ServiceDetails = lazy(() => import('../pages/ServiceDetails/ServiceDetails'));
const SellerProfile  = lazy(() => import('../pages/SellerProfile/SellerProfile'));
const About          = lazy(() => import('../pages/About/About'));
const Contact        = lazy(() => import('../pages/Contact/Contact'));
const NotFound       = lazy(() => import('../pages/NotFound/NotFound'));

const AppRouter = () => (
  <ThemeProvider>
    {/* SVG defs — gradient used by BackToTop progress ring */}
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="btt-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#2563EB" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
    </svg>

    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/services"   element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/seller/:id"   element={<SellerProfile />} />
          <Route path="/about"      element={<About />} />
          <Route path="/contact"    element={<Contact />} />
          <Route path="*"           element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <BackToTop />
    </BrowserRouter>
  </ThemeProvider>
);

export default AppRouter;
