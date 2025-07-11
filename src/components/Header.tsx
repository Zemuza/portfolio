
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100' 
        : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 animate-slide-in-left">
          <div className="relative">
            <Sparkles className="text-amber-600 animate-pulse-glow" size={24} />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:scale-110 hover:translate-x-2 transition-all duration-300 cursor-default">
            Portfolio
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 animate-fade-in">
          {[
            { name: 'เกี่ยวกับฉัน', id: 'about' },
            { name: 'ทักษะ', id: 'skills' },
            { name: 'ประสบการณ์', id: 'experience' },
            { name: 'ผลงาน', id: 'projects' },
            { name: 'ใบรับรอง', id: 'certificates' },
            { name: 'ติดต่อ', id: 'contact' }
          ].map((item, index) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)} 
              className="relative text-amber-700 hover:text-amber-900 transition-all duration-300 group hover:scale-105 hover:-translate-y-1 hover:translate-x-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="hover:animate-pulse">{item.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-amber-800 hover:text-amber-900 transition-all duration-300 hover:scale-110 hover:rotate-12"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="relative">
            {isMenuOpen ? (
              <X size={24} className="animate-scale-in hover:rotate-90 transition-transform duration-300" />
            ) : (
              <Menu size={24} className="animate-scale-in hover:rotate-12 transition-transform duration-300" />
            )}
          </div>
        </button>

        {/* Mobile Navigation */}
        <div className={`absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-4'
        }`}>
          <nav className="flex flex-col p-4 space-y-3">
            {[
              { name: 'เกี่ยวกับฉัน', id: 'about' },
              { name: 'ทักษะ', id: 'skills' },
              { name: 'ประสบการณ์', id: 'experience' },
              { name: 'ผลงาน', id: 'projects' },
              { name: 'ใบรับรอง', id: 'certificates' },
              { name: 'ติดต่อ', id: 'contact' }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)} 
                className="text-amber-700 hover:text-amber-900 transition-all duration-300 text-left hover:bg-amber-50 p-2 rounded-lg hover:translate-x-4 hover:scale-105 hover:-rotate-1 transform"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: isMenuOpen ? 'slide-in-left 0.3s ease-out forwards' : ''
                }}
              >
                <span className="hover:animate-pulse">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
