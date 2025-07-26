import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DataVisualization } from './components/DataVisualization';
import { CaseStudies } from './components/CaseStudies';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <DataVisualization />
        <CaseStudies />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;