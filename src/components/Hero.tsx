import React, { useEffect, useState } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = () => {
    const section = document.getElementById('what-we-stand-for');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Interactive Gradient Orb */}
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-blue-400/30 to-transparent rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />

        {/* Hero Image with Parallax - Multiple diverse images */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <img
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Indian school children learning together"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-600/60 to-transparent animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <ScrollReveal direction="scale">
        <div className="relative flex justify-center items-center mb-10">
            <img
              src="/insfora-2.png"
              alt="INSFORA Logo"
              className="w-72 md:w-80 h-auto drop-shadow-2xl"
            />
            <div className="absolute -inset-10 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-2xl -z-10 animate-pulse rounded-full" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={300} direction="up">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-light mb-8 max-w-5xl mx-auto leading-relaxed text-blue-100">
            Together for Change. Together for Direction.
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={600} direction="up">
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 text-gray-200">
            A youth-led nonprofit committed to inspiring, supporting, and empowering 
            underprivileged children through education, awareness, and research.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={900} direction="scale">
          <div className="mt-12 flex justify-center">
            <button 
              onClick={scrollToSection}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-white font-semibold group-hover:text-blue-100 transition-colors">
                Discover Our Mission
              </span>
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        <div className="animate-bounce">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <ChevronDown className="mt-2 animate-pulse" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};