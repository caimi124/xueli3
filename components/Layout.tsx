import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout; 