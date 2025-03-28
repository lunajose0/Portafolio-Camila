import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const initialDarkMode = localStorage.getItem('darkMode') === 'true';
  const [darkMode, setDarkMode] = useState<boolean>(initialDarkMode);
  const [currentSection, setCurrentSection] = useState<'hero' | 'about' | 'portfolio' | 'contact'>('hero');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [logoSrc, setLogoSrc] = useState<string>(initialDarkMode ? '/logo/logoblack.png' : '/logo/logo.png');

  // Actualizar la fuente del logo al cambiar el modo oscuro
  useEffect(() => {
    if (darkMode) {
      setLogoSrc('/logo/logoblack.png');
    } else {
      setLogoSrc('/logo/logo.png');
    }
  }, [darkMode]);

  // Guardar la preferencia de modo oscuro en localStorage
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const renderSection = () => {
    switch (currentSection) {
      case 'hero':
        return <Hero setCurrentSection={setCurrentSection} darkMode={darkMode} setDarkMode={setDarkMode} />;
      case 'about':
        return <About setCurrentSection={setCurrentSection} darkMode={darkMode} setDarkMode={setDarkMode}/>;
      case 'portfolio':
        return <Portfolio setCurrentSection={setCurrentSection} darkMode={darkMode} />;
      case 'contact':
        return <Contact setCurrentSection={setCurrentSection} darkMode={darkMode} setDarkMode={setDarkMode} />;
      default:
        return <Hero setCurrentSection={setCurrentSection} darkMode={darkMode} setDarkMode={setDarkMode} />;
    }
  };

  return (
    <div className={`relative ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-sm`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logoSrc} alt="Camila" className="h-12 w-auto mr-1" />
              <span className="text-xl font-bold">Camila</span>
            </div>
            {/* Menú para pantallas grandes */}
            <div className="hidden md:flex space-x-6">
              {['Inicio', 'Sobre Mí', 'Portafolio', 'Contacto'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const sectionId = ['hero', 'about', 'portfolio', 'contact'][index] as 'hero' | 'about' | 'portfolio' | 'contact';
                    setCurrentSection(sectionId);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    currentSection === ['hero', 'about', 'portfolio', 'contact'][index]
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            {/* Botón de hamburguesa */}
            <button
              className={`md:hidden text-2xl ${darkMode ? 'text-white' : 'text-gray-800'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              &#9776; {/* Ícono de hamburguesa */}
            </button>
          </div>
        </div>
        {/* Menú desplegable en pantallas pequeñas */}
        {isMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <div className="flex flex-col items-center space-y-4 py-4">
              {['Inicio', 'Sobre Mí', 'Portafolio', 'Contacto'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const sectionId = ['hero', 'about', 'portfolio', 'contact'][index] as 'hero' | 'about' | 'portfolio' | 'contact';
                    setCurrentSection(sectionId);
                    setIsMenuOpen(false); // Cierra el menú después de seleccionar una opción
                  }}
                  className={`text-sm font-medium transition-colors ${
                    currentSection === ['hero', 'about', 'portfolio', 'contact'][index]
                      ? 'text-purple-600'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main>
        {renderSection()}
      </main>

      {/* Botón flotante para el modo oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>
    </div>
  );
}

export default App;