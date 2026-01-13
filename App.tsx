import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';
import Facilities from './components/Facilities';
import Classes from './components/Classes';
import Quote from './components/Quote';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-rhino-dark min-h-screen text-white font-sans selection:bg-rhino-orange selection:text-white">
      <Navbar />
      <Hero />
      <Brands />
      <Facilities />
      <Classes />
      <Quote />
      <Trainers />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;