
import { ExternalLink, Github, Sparkles, Play, Eye } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'การวาดภาพประกวดภาพระบายสี',
      category: 'การประกวด',
      description: 'ได้รับรางวัลรองชนะเลิศอันดับ 1 หัวข้อ ร่วมฉลอง 50 ปี โรงเรียนสารสาสน์พิทยา',
      tech: [],
      image: 'cera.jpg',
      demo: '#',
      github: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'งานออกแบบ UI/UX',
      category: 'Design',
      description: 'รายละเอียดงานออกแบบ เครื่องมือที่ใช้ และกระบวนการทำงาน',
      tech: ['Figma'],
      image: 'cerd.png',
      demo: 'https://www.figma.com/design/j2d9X8BhvEgmhZ7GlDNEXg/Design-System?node-id=106-4&t=Id2TsGSnsB5d8Rki-1',
      github: 'https://www.figma.com/design/j2d9X8BhvEgmhZ7GlDNEXg/Design-System?node-id=106-4&t=Id2TsGSnsB5d8Rki-1',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'แอปพลิเคชันมือถือ',
      category: 'Mobile App',
      description: 'รายละเอียดแอป ฟีเจอร์หลัก และเทคโนโลยีที่ใช้พัฒนา',
      tech: ['VS2022', 'Android Studio', 'Maui'],
      image: 'tickapp.png',
      demo: 'https://github.com/zemuza101/TickTack2',
      github: 'https://github.com/zemuza101/TickTack2',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'ภาพวาด',
      category: 'Drawing',
      description: 'ภาพวาดและศิลปะส่วนตัว',
      tech: ['pixiv'],
      image: 'pixiv.png',
      demo: 'https://www.pixiv.net/en/users/15697165',
      github: 'https://www.pixiv.net/en/users/15697165',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

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

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 opacity-5">
        <Sparkles size={100} className="text-purple-500 animate-float" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-5">
        <Play size={80} className="text-blue-500 animate-bounce-gentle" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent hover:scale-110 hover:translate-y-2 transition-all duration-500 cursor-default ${
              isVisible ? 'animate-fade-in-up' : 'opacity-0'
            }`}>
              ผลงาน
            </h2>
            <p className={`mt-4 text-slate-600 max-w-2xl mx-auto hover:translate-y-1 hover:scale-105 transition-all duration-300 cursor-default ${
              isVisible ? 'animate-fade-in' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
              รวมผลงานที่น่าภาคภูมิใจและโครงการที่ผ่านมา
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50 hover:scale-105 hover:-translate-y-2 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-80' : 'opacity-60'
                  }`}></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:scale-105 hover:translate-x-1 transition-all duration-300 cursor-default">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-black/50 flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Eye className="text-white animate-pulse-glow" size={40} />
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900 transition-colors hover:scale-105 hover:translate-x-2 transition-all duration-300 cursor-default">
                    <span className="hover:animate-pulse">{project.title}</span>
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed hover:translate-x-1 hover:text-slate-700 transition-all duration-300 cursor-default">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm font-medium hover:from-slate-200 hover:to-slate-300 hover:scale-105 hover:translate-x-1 transition-all duration-300 cursor-default"
                      >
                        <span className="hover:animate-pulse">{tech}</span>
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={project.demo} 
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span className="hover:animate-pulse">Demo</span>
                    </a>
                    <a 
                      href={project.github} 
                      className="flex items-center space-x-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-3 rounded-full hover:from-slate-700 hover:to-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                    >
                      <Github size={16} />
                      <span className="hover:animate-pulse">Code</span>
                    </a>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Sparkles className={`text-white animate-pulse-glow ${
                    hoveredProject === index ? 'scale-125' : 'scale-100'
                  } transition-transform duration-300`} size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
