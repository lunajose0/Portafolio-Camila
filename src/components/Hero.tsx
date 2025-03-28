import { motion } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroProps {
  setCurrentSection: (section: 'hero' | 'about' | 'portfolio' | 'contact') => void;
  darkMode: boolean; // Recibe la variable de darkMode como prop
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ setCurrentSection, darkMode }) => {
  return (
    <section className={`min-h-screen relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100'}`}>
      <div className="absolute inset-0 opacity-20">
        {/* Geometric shapes background */}
        <div className={`absolute top-20 left-20 w-40 h-40 rounded-full ${darkMode ? 'bg-purple-600' : 'bg-pink-300'} mix-blend-multiply`}></div>
        <div className={`absolute top-40 right-40 w-60 h-60 rounded-lg rotate-45 ${darkMode ? 'bg-blue-600' : 'bg-purple-300'} mix-blend-multiply`}></div>
        <div className={`absolute bottom-20 left-1/3 w-40 h-40 rounded-lg ${darkMode ? 'bg-indigo-600' : 'bg-blue-300'} mix-blend-multiply`}></div>
      </div>

      <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className={`text-6xl md:text-7xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>
            Camila
          </h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-2xl md:text-3xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}
          >
            Diseñadora Gráfica
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto mb-12`}
          >
            Creando diseños modernos y minimalistas con un toque de color y creatividad.
            Especializada en identidad visual, diseño web y packaging.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentSection('portfolio')}
            className={`bg-purple-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-purple-700 transition-colors ${darkMode ? 'hover:bg-purple-800' : ''}`}
          >
            Ver Portafolio
          </motion.button>
        </motion.div>

        {/* Flecha izquierda - Retroceder */}
        <motion.div
        animate={{ x: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 md:block hidden ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
        onClick={() => setCurrentSection('portfolio')}
      >
        <ChevronLeft size={32} className="transition-colors" />
      </motion.div>

      <motion.div
        animate={{ x: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 md:block hidden ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
        onClick={() => setCurrentSection('hero')}
      >
        <ChevronRight size={32} className="transition-colors" />
      </motion.div>

      {/* Flechas en la parte inferior para pantallas pequeñas */}
      <div className="md:hidden absolute bottom-2 left-1/2 right-1/2 transform -translate-x-1/2 flex justify-around w-48">
        <motion.div
          animate={{ x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
          onClick={() => setCurrentSection('contact')}
        >
          <ChevronLeft size={32} className="transition-colors" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
          onClick={() => setCurrentSection('about')}
        >
          <ChevronRight size={32} className="transition-colors" />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
