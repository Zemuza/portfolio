
import { useEffect, useState } from 'react';

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    color: string;
  }>>([]);

  useEffect(() => {
    // Create floating particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.3 + 0.1,
      color: ['amber', 'orange', 'yellow', 'blue', 'purple'][Math.floor(Math.random() * 5)]
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-orange-50/30 to-yellow-50/20 animate-pulse-glow"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-200/10 to-orange-300/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-200/10 to-purple-300/10 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-gradient-to-br from-green-200/10 to-teal-300/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-gradient-to-br from-pink-200/10 to-rose-300/10 rounded-full blur-xl animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Moving Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/20 to-transparent animate-shimmer"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-300/20 to-transparent animate-shimmer" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute w-${particle.size} h-${particle.size} bg-${particle.color}-300 rounded-full animate-float blur-sm`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animationDuration: `${3 + particle.speed * 2}s`,
            animationDelay: `${particle.id * 0.2}s`
          }}
        />
      ))}
      
      {/* Rotating Elements */}
      <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-amber-200/20 rounded-lg animate-pulse-glow" style={{ 
        animation: 'float 4s ease-in-out infinite, spin 20s linear infinite',
        animationDelay: '1.5s'
      }}></div>
      <div className="absolute bottom-1/3 left-1/4 w-12 h-12 border border-blue-200/20 rounded-full animate-bounce-gentle" style={{ 
        animation: 'bounce-gentle 3s ease-in-out infinite, spin 15s linear infinite reverse',
        animationDelay: '0.8s'
      }}></div>
    </div>
  );
};

export default AnimatedBackground;
