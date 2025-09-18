import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Bundles from './components/Bundles';
import About from './components/About';
import Videos from './components/Videos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Enhanced scroll effect for header
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.style.background = 'rgba(0, 0, 0, 0.98)';
          header.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.3)';
        } else {
          header.style.background = 'rgba(0, 0, 0, 0.95)';
          header.style.boxShadow = '0 8px 32px rgba(255, 215, 0, 0.2)';
        }
      }
    };

    // Enhanced animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.animation = 'slideInUp 0.8s ease forwards';
          }, index * 100);
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.service-card, .bundle-card, .stat, .contact-item');
    animatedElements.forEach(element => {
      observer.observe(element);
    });

    // Add professional interactions
    const cards = document.querySelectorAll('.service-card, .bundle-card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
      });
      
      card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
          this.style.transform = 'translateY(0)';
        } else {
          this.style.transform = 'scale(1.05)';
        }
      });
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <main>
        <Services />
        <Bundles />
        <About />
      </main>
      <Videos />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
