import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const About = ({ setCurrentSection, darkMode }: { setCurrentSection: (section: 'hero' | 'portfolio') => void, darkMode: boolean, setDarkMode: React.Dispatch<React.SetStateAction<boolean>>; }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className={`relative min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`}>
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-2xl transform rotate-6"></div>
              <img
                src="./image/perfil/yo.jpg"
                alt="Camila - Diseñadora Gráfica"
                className="relative rounded-2xl shadow-xl w-full h-[600px] object-cover"
              />
            </div>
            
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-6`}
              >
                Sobre Mí
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 }}
                className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
              >
                <p>
                  ¡Hola! Soy Camila, tengo 18 años y actualmente estudio Administración en la universidad.
                  Sin embargo, descubrí que mi verdadera pasión es el diseño gráfico, la edición y la producción de videos,
                  ya que me permite expresar creatividad mientras transmito experiencias de manera visual e impactante.
                </p>
                <p>
                  Trabajo en el área de marketing para distribuidores de lubricantes Motul y repuestos de refrigeración en el Oriente de Venezuela. 
                  Me especializo en la creación de contenido visual, diseñando piezas gráficas y videos interactivos que destacan la identidad y los servicios de cada empresa.
                  A través de mi trabajo, me encargo de desarrollar estrategias visuales que potencian la imagen de tu negocio, 
                  ayudando a resaltar tus productos y servicios con diseños atractivos y profesionales. Para ello, utilizo herramientas como Adobe Illustrator, Photoshop y CapCut Pro.
                </p>
                <p>
                  Mi enfoque combina el minimalismo con toques creativos y coloridos, siempre
                  manteniendo un equilibrio entre la estética y la funcionalidad.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Especialización</h3>
                  <ul className="grid grid-cols-2 gap-4">
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      <span>Flyers llamativos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                      <span>Pendones publicitarios</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      <span>Rebranding e identidad corporativa</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      <span>Gigantografías</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                      <span>Logos corporativos</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      <span>Manuales de marca</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                      <span>Edición de videos impactantes</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Flechas de navegación con el mismo diseño que las del Portfolio */}
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
          onClick={() => setCurrentSection('hero')}
        >
          <ChevronLeft size={32} className="transition-colors" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
          onClick={() => setCurrentSection('portfolio')}
        >
          <ChevronRight size={32} className="transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
