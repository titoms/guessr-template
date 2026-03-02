import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { AdProvider } from './context/AdContext';
import { MainLayout } from './components/layout/MainLayout';
import { Home } from './pages/Home';
import './i18n';

// Lazy load secondary pages
const FAQ = lazy(() => import('./pages/FAQ.tsx'));
const Legal = lazy(() => import('./pages/Legal.tsx'));

const PageLoader = () => (
  <div className="flex items-center justify-center p-20">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <AdProvider>
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/legal" element={<Legal />} />
                  <Route path="*" element={<Home />} />
                </Routes>
              </Suspense>
            </MainLayout>
          </AdProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
