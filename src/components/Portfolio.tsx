import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Branding Minimalista",
    description: "Identidad visual para una marca de productos orgánicos",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1",
    category: "Branding"
  },
  {
    id: 2,
    title: "Diseño Web Creativo",
    description: "Interfaz moderna para una startup tecnológica",
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1",
    category: "Web"
  },
  {
    id: 3,
    title: "Packaging Sostenible",
    description: "Diseño eco-friendly para productos naturales",
    image: "https://images.unsplash.com/photo-1636955779321-819753cd1741",
    category: "Packaging"
  },
  {
    id: 4,
    title: "Identidad Corporativa",
    description: "Sistema de diseño completo para empresa de servicios",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f",
    category: "Branding"
  },
  {
    id: 5,
    title: "UI/UX App Mobile",
    description: "Diseño de interfaz para aplicación móvil",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02",
    category: "Web"
  },
  {
    id: 6,
    title: "Packaging Premium",
    description: "Diseño de empaque para productos de lujo",
    image: "https://images.unsplash.com/photo-1636955779198-7c2f938c4472",
    category: "Packaging"
  }
];

const Portfolio = ({ setCurrentSection, darkMode }: { setCurrentSection: React.Dispatch<React.SetStateAction<'hero' | 'about' | 'portfolio' | 'contact'>>, darkMode: boolean }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className={`min-h-screen py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50'}`}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'} mb-12`}
        >
          Portafolio
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative group overflow-hidden rounded-xl shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'bg-opacity-50' : 'bg-opacity-0'}`}>
                  <div className="absolute bottom-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for project details */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className={`bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-4 right-4 ${darkMode ? 'text-white' : 'text-gray-600'} hover:${darkMode ? 'text-gray-300' : 'text-gray-900'}`}
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-8">
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} mb-4`}>{selectedProject.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>{selectedProject.description}</p>
                <span className={`inline-block ${darkMode ? 'bg-purple-700 text-purple-100' : 'bg-purple-100 text-purple-800'} px-3 py-1 rounded-full text-sm`}>
                  {selectedProject.category}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Flecha izquierda - Navegar a "Sobre Mí" */}
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
          onClick={() => setCurrentSection('about')}
        >
          <ChevronLeft size={32} className="transition-colors" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
          onClick={() => setCurrentSection('contact')}
        >
          <ChevronRight size={32} className="transition-colors" />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
