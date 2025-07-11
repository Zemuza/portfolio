
import { User, GraduationCap, Star, Sparkles, Heart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Sparkles size={60} className="text-amber-400 animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Heart size={40} className="text-orange-400 animate-bounce-gentle" />
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-12 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent hover:scale-110 hover:translate-y-2 transition-all duration-500 cursor-default ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}>
            เกี่ยวกับฉัน
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image Section */}
            <div className={`text-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-12'}`}>
              <div className="relative inline-block">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-amber-200 via-orange-300 to-yellow-200 rounded-full flex items-center justify-center mb-6 shadow-2xl relative overflow-hidden group hover:scale-105 transition-all duration-500">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer"></div>
                  <User size={120} className="text-amber-800 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                  
                  {/* Floating elements around profile */}
                  <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-2 animate-bounce-gentle">
                    <Star size={16} className="text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 bg-orange-400 rounded-full p-2 animate-float">
                    <Sparkles size={16} className="text-white" />
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 w-64 h-64 mx-auto rounded-full bg-gradient-to-r from-amber-400 to-orange-400 opacity-20 animate-glow"></div>
              </div>
              
            </div>
            
            {/* Information Section */}
            <div className="space-y-6">
              {/* Name Card */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-12'
              }`} style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-full p-2 mr-3">
                    <User className="text-white" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-800 to-orange-800 bg-clip-text text-transparent hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-default">
                    หรรษธร เกษียร
                  </h3>
                </div>
                <p className="text-lg text-amber-800 hover:translate-x-2 hover:text-amber-900 transition-all duration-300 cursor-default">ชื่อเล่น ต้าร์ </p>
              </div>
              
              {/* Education Card */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-12'
              }`} style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-400 rounded-full p-2 mr-3">
                    <GraduationCap className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-default">ประวัติย่อ</h3>
                </div>
                <p className="text-amber-800 leading-relaxed hover:translate-x-2 hover:text-amber-900 transition-all duration-300 cursor-default">
                  สำเร็จการศึกษาระดับมัธยมศึกษา ปีที่ 6  ผลการเรียนเฉลี่ย 2.67 จากโรงเรียนสารสาสน์วิเทศคลองหลวง มีประสบการณ์ทำงานด้านทหาร เป็นเวลา 2 ปี มีความสนใจในการพัฒนาและเรียนรู้เทคโนโลยีใหม่ๆ อย่างต่อเนื่อง
                </p>
              </div>
              
              {/* Strengths Card */}
              <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-amber-100 ${
                isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-12'
              }`} style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-r from-green-400 to-teal-400 rounded-full p-2 mr-3 animate-pulse-glow">
                    <Star className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-amber-900 hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-default">จุดแข็ง / ความถนัด</h3>
                </div>
                <ul className="text-amber-800 space-y-3">
                  {[
                    'การเรียนรู้และปรับตัวได้เร็ว',
                    'ความคิดสร้างสรรค์และการแก้ปัญหา',
                    'การทำงานเป็นทีมและการสื่อสาร',
                    'ความรับผิดชอบและตรงต่อเวลา'
                  ].map((strength, index) => (
                    <li key={index} className="flex items-center space-x-2 hover:translate-x-4 hover:scale-105 hover:text-amber-900 transition-all duration-300 cursor-default">
                      <span className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse"></span>
                      <span className="hover:animate-pulse">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
