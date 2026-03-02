import React, { createContext, useContext, useState } from 'react';

export type AdProviderType = 'aads' | 'adsense' | 'none';

interface AdContextType {
  showAds: boolean;
  hasConsent: boolean;
  activeProvider: AdProviderType;
  setConsent: (consent: boolean) => void;
  setProvider: (provider: AdProviderType) => void;
  isDev: boolean;
}

const AdContext = createContext<AdContextType | undefined>(undefined);

export const AdProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasConsent, setHasConsent] = useState<boolean>(() => {
    return localStorage.getItem('guessr_consent') === 'true';
  });
  
  const [activeProvider, setActiveProvider] = useState<AdProviderType>('aads');
  const isDev = import.meta.env.DEV;

  const setConsent = (consent: boolean) => {
    setHasConsent(consent);
    localStorage.setItem('guessr_consent', String(consent));
  };

  const setProvider = (provider: AdProviderType) => {
    setActiveProvider(provider);
  };

  const showAds = hasConsent && activeProvider !== 'none';

  return (
    <AdContext.Provider value={{ showAds, hasConsent, activeProvider, setConsent, setProvider, isDev }}>
      {children}
    </AdContext.Provider>
  );
};

export const useAds = () => {
  const context = useContext(AdContext);
  if (!context) {
    throw new Error('useAds must be used within an AdProvider');
  }
  return context;
};
