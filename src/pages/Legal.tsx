import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Legal: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="page-fade-in w-full max-w-[800px] py-12 text-left">
      <h1 className="text-4xl font-black mb-8">{t('header.legal')}</h1>
      
      <section className="mb-10 p-8 glass rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
        <p className="opacity-80 leading-relaxed">
          This template is provided as-is for development purposes. 
          By using this application, you agree to respect the local storage of your guesses.
        </p>
      </section>

      <section className="p-8 glass rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="opacity-80 leading-relaxed mb-4">
          We value your privacy. This application does not collect personal data beyond what is necessary 
          to provide the game experience.
        </p>
        <ul className="list-disc list-inside opacity-70 space-y-2">
          <li>Cookies are used solely for theme and language persistence.</li>
          <li>Third-party ads may collect anonymized usage data if consent is granted.</li>
          <li>Your game progress is stored locally in your browser.</li>
        </ul>
      </section>
    </div>
  );
};

export default Legal;
