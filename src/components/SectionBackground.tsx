
import { ReactNode } from 'react';

interface SectionBackgroundProps {
  children: ReactNode;
  variant?: 'default' | 'gradient' | 'dots' | 'waves';
  className?: string;
}

const SectionBackground = ({ children, variant = 'default', className = '' }: SectionBackgroundProps) => {
  const getBackgroundPattern = () => {
    switch (variant) {
      case 'gradient':
        return (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-amber-100/50 via-orange-100/30 to-yellow-100/50 animate-pulse-glow"></div>
            <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-blue-100/30 to-transparent rounded-full blur-3xl animate-float"></div>
          </div>
        );
      case 'dots':
        return (
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.3) 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
            <div className="absolute inset-0 animate-shimmer" style={{
              backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(251, 146, 60, 0.2) 1px, transparent 0)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        );
      case 'waves':
        return (
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
              <path d="M0,400 Q300,300 600,400 T1200,400 L1200,800 L0,800 Z" fill="url(#wave1)" className="animate-float" />
              <path d="M0,500 Q300,400 600,500 T1200,500 L1200,800 L0,800 Z" fill="url(#wave2)" className="animate-bounce-gentle" />
              <defs>
                <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="rgb(251, 146, 60)" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {getBackgroundPattern()}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
