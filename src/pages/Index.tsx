
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import SectionBackground from '@/components/SectionBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <SectionBackground variant="gradient">
          <About />
        </SectionBackground>
        <SectionBackground variant="dots">
          <Skills />
        </SectionBackground>
        <SectionBackground variant="waves">
          <Experience />
        </SectionBackground>
        <SectionBackground variant="gradient">
          <Projects />
        </SectionBackground>
        <SectionBackground variant="dots">
          <Certificates />
        </SectionBackground>
        <SectionBackground variant="default">
          <Contact />
        </SectionBackground>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
