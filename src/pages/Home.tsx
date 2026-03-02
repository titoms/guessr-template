import React from 'react';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../context/LanguageContext';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-fade-in flex flex-col items-center text-center max-w-[800px] py-12">
      <h1 className="text-4xl md:text-6xl font-black mb-6">
        {t('header.play')} <span className="text-primary tracking-tighter">NOW</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-10 max-w-[600px]">
        This is a premium template for Guessr-style games. 
        It includes everything you need to ship fast: 
        Design System, Ads, i18n, and more.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <Button size="lg" variant="primary">Start Game</Button>
        <Button size="lg" variant="glass">How to Play</Button>
      </div>

      <div className="mt-16 p-8 glass rounded-[32px] w-full">
        <h2 className="text-2xl font-bold mb-4">Core Benefits</h2>
        <ul className="text-left space-y-2 opacity-80">
          <li>✨ Advanced Design System (CSS Variables)</li>
          <li>📱 Fully Responsive Layout</li>
          <li>🌍 Multi-language Support (i18n)</li>
          <li>💰 Multi-provider Ads Integration</li>
          <li>🛡️ GDPR Consent Logic</li>
          <li>✅ Comprehensive Testing Suite</li>
        </ul>
      </div>
    </div>
  );
};
