import React from 'react';
import { Header } from './Header';
import { UniversalAdContainer } from '../ads/UniversalAdContainer';
import './MainLayout.css';

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="layout-root">
      <Header />
      
      <div className="layout-content">
        {/* Left Sidebar (Desktop) */}
        <aside className="sidebar sidebar-left">
          <div className="sticky-sidebar">
            <UniversalAdContainer unitId="2428884" format="vertical" />
          </div>
        </aside>

        <main id="main-content" className="main-container">
          {children}
        </main>

        {/* Right Sidebar (Desktop) */}
        <aside className="sidebar sidebar-right">
          <div className="sticky-sidebar">
            <UniversalAdContainer unitId="2428884" format="vertical" />
          </div>
        </aside>
      </div>

      <div className="bottom-ad-container">
        <UniversalAdContainer unitId="2428884" format="horizontal" />
      </div>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} GuessrTemplate. All rights reserved.</p>
      </footer>
    </div>
  );
};
