
import { Mail, Phone, Github, Linkedin, MapPin, MessageCircle, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: 'อีเมล',
      value: 'z_zemuza@hotmail.com',
      color: 'from-red-400 to-pink-500',
      bgColor: 'from-red-50 to-pink-50'
    },
    {
      icon: Phone,
      title: 'โทรศัพท์',
      value: '0909624352',
      color: 'from-green-400 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: MapPin,
      title: 'ที่อยู่',
      value: '98/136 ถ.เลียบคลองสาม ต.คลองสาม อ.คลองหลวง ปทุมธานี ไทย 12120',
      color: 'from-blue-400 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    }
  ];

  const socialLinks = [
    { icon: Github, color: 'from-gray-700 to-gray-900', href: 'https://github.com/Zemuza' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 opacity-10">
        <MessageCircle size={80} className="text-purple-400 animate-float" />
      </div>
      <div className="absolute bottom-20 right-20 opacity-10">
        <Sparkles size={60} className="text-pink-400 animate-bounce-gentle" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              ติดต่อ
            </h2>
            <p className={`mt-4 text-slate-600 max-w-2xl mx-auto ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
              พร้อมรับฟังและตอบทุกข้อสงสัย มาคุยกันได้เลย!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className={`space-y-6 ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-8">
                  ข้อมูลติดต่อ
                </h3>
                
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div 
                      key={index}
                      className={`flex items-center p-6 bg-gradient-to-r ${method.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in`}
                      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                    >
                      <div className={`bg-gradient-to-r ${method.color} rounded-full p-4 mr-4 shadow-lg`}>
                        <method.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-slate-700 font-semibold">{method.title}</p>
                        <p className="text-slate-600">{method.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-slate-700 mb-6">Social Media</h4>
                  <div className="flex space-x-4 justify-center">
                    {socialLinks.map((social, index) => (
                      <a 
                        key={index}
                        href={social.href} 
                        className={`bg-gradient-to-r ${social.color} p-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110 animate-scale-in`}
                        style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                      >
                        <social.icon className="text-white" size={24} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;