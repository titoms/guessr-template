import React from 'react';
import { useAds } from '../../context/AdContext';
import type { AdProviderType } from '../../context/AdContext';

interface UniversalAdContainerProps {
  provider?: AdProviderType;
  unitId: string;
  format?: 'horizontal' | 'vertical' | 'adaptive';
  className?: string;
}

export const UniversalAdContainer: React.FC<UniversalAdContainerProps> = ({
  provider,
  unitId,
  format = 'adaptive',
  className = ''
}) => {
  const { showAds, activeProvider, isDev, hasConsent } = useAds();
  const currentProvider = provider || activeProvider;

  if (!showAds && !isDev) return null;

  // Placeholder for development or when consent is missing
  if (isDev && (!hasConsent || !showAds)) {
    const styles = format === 'vertical' 
      ? { width: '160px', height: '600px' } 
      : { width: '100%', minHeight: '100px' };
      
    return (
      <div 
        className={`flex flex-col items-center justify-center p-4 border-2 border-dashed border-primary/20 bg-primary/5 rounded-xl ${className}`}
        style={styles}
      >
        <span className="text-xs font-bold uppercase tracking-widest text-primary/40">Ad Component ({currentProvider})</span>
        <span className="text-[10px] text-primary/30 mt-1">ID: {unitId}</span>
        {!hasConsent && <span className="mt-2 text-[9px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">Waiting for Consent</span>}
      </div>
    );
  }

  if (!showAds) return null;

  switch (currentProvider) {
    case 'aads':
      return <AAds unitId={unitId} format={format} className={className} />;
    case 'adsense':
      return <AdSense unitId={unitId} className={className} />;
    default:
      return null;
  }
};

const AAds: React.FC<{ unitId: string; format: string; className: string }> = ({ unitId, format, className }) => {
  const size = format === 'vertical' ? '160x600' : format === 'horizontal' ? '728x90' : 'Adaptive';
  return (
    <div className={`flex justify-center my-4 ${className}`}>
      <iframe
        data-aa={unitId}
        src={`//acceptable.a-ads.com/${unitId}/?size=${size}`}
        style={{ border: 0, padding: 0, width: '100%', height: format === 'vertical' ? '600px' : 'auto', overflow: 'hidden' }}
        title="A-Ads"
      />
    </div>
  );
};

const AdSense: React.FC<{ unitId: string; className: string }> = ({ unitId, className }) => {
  return (
    <div className={`flex justify-center my-4 ${className}`}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client={unitId} // Using unitId as client id for simplicity in template
           data-ad-slot="default"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};
