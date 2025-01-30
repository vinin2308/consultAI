import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText, Brain, Users, Map, Menu, X } from 'lucide-react';

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-[#D0F2FC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img
                    src="https://raw.githubusercontent.com/thiagosilvadev/5GzJGYbL/main/logo.png"
                    alt="ConsultAI Logo"
                    className="h-10 w-auto"
                />
                <h1 className="text-2xl font-bold text-[#2A2AD4]">ConsultAI</h1>
              </div>

              {/* Mobile menu button */}
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[#2A2AD4] hover:opacity-80 focus:outline-none"
              >
                {isMenuOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
              </button>

              <nav className="hidden md:flex space-x-4">
                <Link
                    to="/exame"
                    className="px-4 py-2 rounded-md bg-white text-[#2A2AD4] hover:bg-opacity-90 transition-colors"
                >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Exame
                </span>
                </Link>
                <Link
                    to="/roadmap"
                    className="px-4 py-2 rounded-md bg-white text-[#2A2AD4] hover:bg-opacity-90 transition-colors"
                >
                <span className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  Roadmap
                </span>
                </Link>
                <Link
                    to="/contatos"
                    className="px-4 py-2 rounded-md bg-white text-[#2A2AD4] hover:bg-opacity-90 transition-colors border-2 border-white hover:border-opacity-80"
                >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Contatos
                </span>
                </Link>
              </nav>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
              <div className="flex flex-col space-y-2">
                <Link
                    to="/exame"
                    className="px-4 py-2 rounded-md bg-white text-[#2A2AD4] hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Exame
                </span>
                </Link>
                <Link
                    to="/roadmap"
                    className="px-4 py-2 rounded-md bg-white text-[#2A2AD4] hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                <span className="flex items-center gap-2">
                  <Map className="w-4 h-4" />
                  Roadmap
                </span>
                </Link>
                <Link
                    to="/contatos"
                    className="px-4 py-2 rounded-md bg-white text-[#2A2AD4] hover:bg-opacity-90 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                >
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Contatos
                </span>
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="bg-gradient-to-b from-[#D0F2FC] to-[#D0F2FC] text-[#2A2AD4] py-16">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <h2 className="text-6xl font-bold mb-6">ConsultAI</h2>
              <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
                Revolucionando a compreensão dos seus exames médicos através da Inteligência Artificial.
                Nossa plataforma auxilia médicos a explicarem resultados complexos de forma simples e clara para seus pacientes,
                facilitando a comunicação e o entendimento do diagnóstico.
              </p>
              <img
                  src="https://healthcare-mittelhessen.eu/wp-content/uploads/2019/05/Robotik-2.jpg"
                  alt="Robô médico com tecnologia avançada"
                  className="rounded-xl shadow-2xl mx-auto mb-10 max-w-2xl object-cover h-[550px] w-full"
              />
              <Link
                  to="/exame"
                  className="inline-flex items-center justify-center px-8 py-4 text-xl font-medium rounded-lg text-[#2A2AD4] bg-white hover:bg-opacity-90 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                <FileText className="w-6 h-6 mr-2" />
                Analisar Exame Agora
              </Link>
            </div>
          </section>

          {/* Indicações Section */}
          <section className="py-20 bg-[#D0F2FC]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-3xl font-bold text-center text-[#2A2AD4] mb-12">Para quem é indicado?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold mb-6 text-[#2A2AD4]">Pacientes</h4>
                  <ul className="space-y-3 text-[#2A2AD4]">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Pessoas que desejam entender melhor seus exames médicos
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Indivíduos que buscam uma segunda opinião
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Pacientes com dificuldade de interpretar termos médicos
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <h4 className="text-xl font-semibold mb-6 text-[#2A2AD4]">Profissionais de Saúde</h4>
                  <ul className="space-y-3 text-[#2A2AD4]">
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Médicos que desejam explicar resultados de forma mais clara
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Clínicas e laboratórios
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">•</span>
                      Estudantes da área da saúde
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        {/* Footer */}
        <footer className="bg-[#2A2AD4] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 items-center">
              <div className="text-center text-[#D0F2FC]">eTech</div>
              <div className="text-center font-bold text-xl text-[#D0F2FC]">FPFTech</div>
              <div className="text-center">
                <p className="text-[#D0F2FC]">José Roosevelt</p>
                <p className="text-[#D0F2FC]">Thiago Silva</p>
                <p className="text-[#D0F2FC]">Vinícius Gomes</p>
              </div>
            </div>
            <div className="text-center text-[#D0F2FC] mt-6">
              &copy; 2025 ConsultAI. Todos os direitos reservados.
            </div>
          </div>
        </footer>

      </div>
  );
}

export default HomePage;