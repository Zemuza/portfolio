
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center mb-4">
          สร้างด้วย <Heart className="text-red-400 mx-2" size={16} /> โดย [Hassatorn Kasian]
        </p>
        <p className="text-amber-300 text-sm">
          © 2024 Portfolio. สงวนลิขสิทธิ์.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
