
import { Code, Palette, Users, MessageSquare, Lightbulb, Wrench, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technicalSkills = [
    { name: 'HTML/CSS', level: 90, color: 'from-red-400 to-pink-500' },
    { name: 'JavaScript', level: 85, color: 'from-yellow-400 to-orange-500' },
    { name: 'React', level: 80, color: 'from-blue-400 to-cyan-500' },
    { name: 'Python', level: 75, color: 'from-green-400 to-teal-500' },
    { name: 'Photoshop', level: 85, color: 'from-purple-400 to-indigo-500' },
    { name: 'Figma', level: 80, color: 'from-pink-400 to-rose-500' }
  ];

  const softSkills = [
    { name: 'การสื่อสาร', icon: MessageSquare, color: 'from-blue-400 to-cyan-400' },
    { name: 'การทำงานเป็นทีม', icon: Users, color: 'from-green-400 to-emerald-400' },
    { name: 'การแก้ปัญหา', icon: Lightbulb, color: 'from-yellow-400 to-amber-400' },
    { name: 'ความคิดสร้างสรรค์', icon: Palette, color: 'from-purple-400 to-violet-400' },
    { name: 'การจัดการเวลา', icon: Wrench, color: 'from-red-400 to-orange-400' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setAnimateSkills(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:scale-110 hover:translate-y-2 transition-all duration-500 cursor-default ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              ทักษะ
            </h2>
            <div className={`mt-4 flex justify-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
              <Zap className="text-amber-500 animate-pulse-glow hover:scale-125 hover:rotate-12 transition-all duration-300" size={32} />
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div className={`bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-amber-100 ${
              isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-12'
            }`}>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-full p-3 mr-4 animate-pulse-glow hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Code className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-default">
                  ทักษะด้านเทคนิค
                </h3>
              </div>
              
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="group hover:translate-x-2 transition-all duration-300">
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-800 font-medium flex items-center hover:scale-105 hover:translate-x-1 transition-all duration-300 cursor-default">
                        <span className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 mr-2 animate-pulse"></span>
                        <span className="hover:animate-pulse">{skill.name}</span>
                      </span>
                      <span className="text-amber-700 font-bold hover:scale-110 hover:translate-x-1 transition-all duration-300 cursor-default">{skill.level}%</span>
                    </div>
                    <div className="bg-amber-200/50 rounded-full h-4 overflow-hidden shadow-inner">
                      <div 
                        className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 ease-out relative overflow-hidden ${
                          animateSkills ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                          width: animateSkills ? `${skill.level}%` : '0%',
                          animationDelay: `${index * 0.2}s`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className={`bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-blue-100 ${
              isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-12'
            }`}>
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-3 mr-4 animate-pulse-glow hover:scale-110 hover:rotate-12 transition-all duration-300">
                  <Users className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-default">
                  ทักษะด้านซอฟต์สกิล
                </h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 border border-white/50 ${
                      isVisible ? 'animate-fade-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                  >
                    <div className={`bg-gradient-to-r ${skill.color} rounded-full p-3 mr-4 shadow-lg hover:scale-110 hover:rotate-12 transition-all duration-300`}>
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <span className="text-slate-700 font-medium hover:scale-105 hover:translate-x-2 hover:text-slate-900 transition-all duration-300 cursor-default hover:animate-pulse">{skill.name}</span>
                    <div className="ml-auto">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center hover:scale-110 hover:rotate-12 transition-all duration-300">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
