import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const faqs = [
    { q: "What is this game?", a: "This is a guesser-style game where you have to find the correct answer based on hints or images." },
    { q: "How do I play?", a: "Simply enter your guess in the input field and press enter. You will receive feedback on your guess." },
    { q: "Is it free?", a: "Yes, it's completely free to play!" },
    { q: "How can I contact you?", a: "You can reach out via the contact information in the footer." }
  ];

  return (
    <div className="page-fade-in w-full max-w-[800px] py-12">
      <h1 className="text-4xl font-black mb-8">{t('header.faq')}</h1>
      <div className="space-y-6">
        {faqs.map((faq, i) => (
          <div key={i} className="p-6 glass rounded-2xl text-left">
            <h3 className="text-xl font-bold mb-2 text-primary">{faq.q}</h3>
            <p className="opacity-80 leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
