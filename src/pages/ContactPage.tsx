import React, { useState, FormEvent } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 text-white hover:text-blue-100">
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar</span>
            </Link>
            <h1 className="text-2xl font-bold">ConsultAI</h1>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Dúvidas ou Feedback?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="assunto" className="block text-sm font-medium text-gray-700">
                Assunto
              </label>
              <input
                type="text"
                id="assunto"
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.assunto}
                onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                required
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition-colors"
                value={formData.mensagem}
                onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Enviar Mensagem
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;