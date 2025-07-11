
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      degree: 'มัธยมศึกษา',
      field: 'ภาควิชา วิทย-คณิต',
      school: 'โรงเรียนสารสาสน์วิเทศคลองหลวง',
      year: '2557-2559',
      gpa: '2.67'
    }
  ];

  const workExperience = [
    {
      position: 'สิบตรี บก.ร้อย',
      company: 'กองพันทหารราบที่ 2 กรมทหารราบที่ 8 ค่ายมหาศักดิพลเสพ',
      period: '2561-2564',
      description: 'จัดการเอกสาร และ รับผิดชอบ ข้อมูลของพลทหารทางคอมพิวเตอร์'
    }
  ];

  const projects = [
    {
      title: 'การวาดภาพประกวดภาพระบายสี',
      period: 'วันที่ 22/12/2557',
      description: 'ได้รับรางวัลรองชนะเลิศอันดับ 1 หัวข้อ ร่วมฉลอง 50 ปี โรงเรียนสารสาสน์พิทยา'
    },
    {
      title: 'การประกวดทักษะวิชาชีพคหกรรมศาสตร์ คณะเทคโนโลยีคหกรรมศาสตร์ มหาวิทยาลัยเทคโนโลยีราชมลคลธัญบุรี',
      period: 'วันที่ 1/12/2559',
      description: 'ได้รับรางวัลรองชนะเลิศอันดับ 1 หัวข้อ การผลิตสื่อประกอบเล่นนิทาน คำสอนพ่อ'
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
              <h3 className="text-2xl font-bold text-amber-900 mb-6">การประกวด</h3>
              
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
