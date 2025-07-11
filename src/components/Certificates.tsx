
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Certificate จากคอร์สออนไลน์',
      issuer: 'Coursera / Udemy / edX',
      date: 'มม./ปปปป',
      description: 'รายละเอียดคอร์สที่เรียนจบ',
      link: '#'
    },
    {
      title: 'รางวัลจากการแข่งขัน',
      issuer: 'ชื่อการแข่งขัน',
      date: 'มม./ปปปป',
      description: 'รางวัลที่ได้รับและรายละเอียดการแข่งขัน',
      link: '#'
    },
    {
      title: 'ประกาศนียบัตรต่างๆ',
      issuer: 'หน่วยงานที่ออกใบประกาศ',
      date: 'มม./ปปปป',
      description: 'รายละเอียดประกาศนียบัตร',
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-amber-900">ใบรับรอง / รางวัล</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-amber-200 p-3 rounded-full mr-4">
                    <Award className="text-amber-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{cert.title}</h3>
                    <p className="text-amber-700 font-medium mb-1">{cert.issuer}</p>
                    <div className="flex items-center text-amber-600 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-amber-800 mb-4">{cert.description}</p>
                
                <a 
                  href={cert.link}
                  className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <ExternalLink size={16} className="mr-2" />
                  ดูใบรับรอง
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
