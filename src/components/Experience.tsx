
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: 'ปริญญาตรี',
      field: 'สาขาวิชา...',
      school: 'มหาวิทยาลัย...',
      year: '2020-2024',
      gpa: '3.XX'
    }
  ];

  const workExperience = [
    {
      position: 'ตำแหน่งงาน',
      company: 'ชื่อบริษัท',
      period: 'มม./ปปปป - มม./ปปปป',
      description: 'รายละเอียดงานที่ทำ และความรับผิดชอบ'
    }
  ];

  const projects = [
    {
      title: 'โครงการ/การฝึกงาน 1',
      period: 'มม./ปปปป',
      description: 'รายละเอียดโครงการ เทคโนโลยีที่ใช้ และผลที่ได้'
    },
    {
      title: 'โครงการ/การฝึกงาน 2',
      period: 'มม./ปปปป',
      description: 'รายละเอียดโครงการ เทคโนโลยีที่ใช้ และผลที่ได้'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">ประสบการณ์ / การศึกษา</h2>
          
          <div className="space-y-12">
            {/* Education */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <GraduationCap className="text-amber-700 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-amber-900">การศึกษา</h3>
              </div>
              
              {education.map((edu, index) => (
                <div key={index} className="border-l-4 border-amber-500 pl-6 pb-6">
                  <h4 className="text-xl font-bold text-amber-800">{edu.degree} {edu.field}</h4>
                  <p className="text-amber-700 font-medium">{edu.school}</p>
                  <div className="flex items-center mt-2 text-amber-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{edu.year}</span>
                    <span className="ml-4">เกรดเฉลี่ย: {edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Work Experience */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Briefcase className="text-amber-700 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-amber-900">ประสบการณ์ทำงาน</h3>
              </div>
              
              {workExperience.map((work, index) => (
                <div key={index} className="border-l-4 border-amber-500 pl-6 pb-6">
                  <h4 className="text-xl font-bold text-amber-800">{work.position}</h4>
                  <p className="text-amber-700 font-medium">{work.company}</p>
                  <div className="flex items-center mt-2 mb-3 text-amber-600">
                    <Calendar size={16} className="mr-2" />
                    <span>{work.period}</span>
                  </div>
                  <p className="text-amber-800">{work.description}</p>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">การฝึกงาน / โครงการ</h3>
              
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-l-4 border-amber-500 pl-6">
                    <h4 className="text-xl font-bold text-amber-800">{project.title}</h4>
                    <div className="flex items-center mt-2 mb-3 text-amber-600">
                      <Calendar size={16} className="mr-2" />
                      <span>{project.period}</span>
                    </div>
                    <p className="text-amber-800">{project.description}</p>
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

export default Experience;
