import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

const Certificates = () => {
  const certificates = [
    {
      title: 'การวาดภาพประกวดภาพระบายสี ',
      issuer: 'โรงเรียนสารสาสน์พิทยา',
      date: '22/12/2557',
      description: 'ได้รับรางวัลรองชนะเลิศอันดับ 1 หัวข้อ ร่วมฉลอง 50 ปี โรงเรียนสารสาสน์พิทยา',
      image: 'cera.jpg'
    },
    {
      title: 'การประกวดทักษะวิชาชีพคหกรรมศาสตร์ ',
      issuer: 'มหาวิทยาลัยเทคโนโลยีราชมลคลธัญบุรี',
      date: '1/12/2559',
      description: 'ได้รับรางวัลรองชนะเลิศอันดับ 1 หัวข้อ การผลิตสื่อประกอบเล่นนิทาน คำสอนพ่อ',
      image: 'cerb.jpg'
    },
    {
      title: 'โครงการ สร้างความสุขเพิ่มรอยยิ้ม ผู้สูงอายุ',
      issuer: 'โรงเรียนสารสาสน์วิเทศคลองหลวง',
      date: '10/12/2559',
      description: 'โครงการ สร้างความสุขเพิ่มรอยยิ้ม ผู้สูงอายุ',
      image: 'cerc.jpg'
    },

    {
      title: 'GET start with Azure App',
      issuer: 'SET',
      date: '11/1/2568',
      description: 'โครงการ สร้างความสุขเพิ่มรอยยิ้ม ผู้สูงอายุ',
      image: 'certificateset.png'
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
                
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="inline-flex items-center text-amber-700 hover:text-amber-900 transition-colors cursor-pointer">
                      <ExternalLink size={16} className="mr-2" />
                      ดูใบรับรอง
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full p-0">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;