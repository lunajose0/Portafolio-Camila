import { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, ChevronRight, ChevronLeft } from 'lucide-react';

interface ContactProps {
  setCurrentSection: (section: 'hero' | 'portfolio' | 'contact') => void;
  darkMode: boolean;  // Recibimos la prop darkMode
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<ContactProps> = ({ setCurrentSection, darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className={`min-h-screen py-20 ${darkMode ? 'bg-gradient-to-br from-gray-800 via-gray-900 to-black' : 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50'} relative`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className={`text-4xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-800'} mb-12`}>Contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'} mb-6`}>¡Hablemos!</h3>
              <p className={`text-gray-600 mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
              </p>

              <div className="space-y-4">
                <a href="mailto:camila@example.com" className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-600 transition-colors`}>
                  <Mail size={20} />
                  <span>camila@example.com</span>
                </a>
                <a href="tel:+1234567890" className={`flex items-center space-x-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-purple-600 transition-colors`}>
                  <Phone size={20} />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex space-x-4 mt-6">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`text-gray-600 hover:text-purple-600 transition-colors ${darkMode ? 'text-gray-400' : ''}`}>
                    <Instagram size={24} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`text-gray-600 hover:text-purple-600 transition-colors ${darkMode ? 'text-gray-400' : ''}`}>
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  />
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-2 border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={`w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors ${darkMode ? 'bg-purple-500' : ''}`}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Flechas en su posición original (ocultas en pantallas pequeñas) */}
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
          onClick={() => setCurrentSection('portfolio')}
        >
          <ChevronLeft size={32} className="transition-colors" />
        </motion.div>
        <motion.div
          animate={{ x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} shadow-md p-3 rounded-full hover:bg-gray-100 transition`}
          onClick={() => setCurrentSection('hero')}
        >
          <ChevronRight size={32} className="transition-colors" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;