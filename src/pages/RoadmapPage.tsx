import React from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowLeft,
    Star,
    Rocket,
    Brain,
    Shield,
    Globe,
    Users,
    Zap,
    MessageCircle,
    History,
    Image,
    LineChart,
} from 'lucide-react';

function RoadmapPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-[#D0F2FC] text-#2A2AD4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center space-x-2 text-2A2AD4 hover:text-blue-900">
                            <ArrowLeft className="w-5 h-5" />
                            <span>Voltar</span>
                        </Link>
                        <h1 className="text-2xl font-bold">ConsultAI</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosso Roadmap</h2>
                    <p className="text-xl text-gray-600">
                        Conheça os próximos passos e melhorias planejadas para o ConsultAI
                    </p>
                </div>

                <div className="space-y-16">
                    {/* Q1 2025 */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <MessageCircle className="w-8 h-8 text-blue-500" />
                            <h3 className="text-2xl font-bold text-gray-900">Q1 2025</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <Brain className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Bot Telegram</h4>
                                    <p className="text-gray-600">Desenvolvimento de um bot no Telegram para consultas rápidas e notificações de resultados</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Segurança Avançada</h4>
                                    <p className="text-gray-600">Implementação de criptografia de ponta a ponta para dados sensíveis</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q2 2025 */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Star className="w-8 h-8 text-yellow-500" />
                            <h3 className="text-2xl font-bold text-gray-900">Q2 2025</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <Globe className="w-6 h-6 text-indigo-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Suporte Multi-idioma</h4>
                                    <p className="text-gray-600">Adição de suporte para inglês, espanhol e francês</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <History className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Histórico de Consultas</h4>
                                    <p className="text-gray-600">Suporte a chat com persistência e acompanhamento do paciente</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q3 2025 */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Rocket className="w-8 h-8 text-purple-500" />
                            <h3 className="text-2xl font-bold text-gray-900">Q3 2025</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <Image className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Suporte a Exames de Imagem</h4>
                                    <p className="text-gray-600">Análise de exames de imagem como raio-x, ressonância e tomografia</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <LineChart className="w-6 h-6 text-teal-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Suporte a múltiplos exames</h4>
                                    <p className="text-gray-600">Traçar uma linha do tempo, gerando gráficos e inferindo tendências</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q4 2025 */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <Zap className="w-8 h-8 text-blue-500" />
                            <h3 className="text-2xl font-bold text-gray-900">Q4 2025</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="flex gap-3">
                                <Brain className="w-6 h-6 text-purple-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">IA Avançada</h4>
                                    <p className="text-gray-600">Aprimoramento dos algoritmos com deep learning para análises mais precisas</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Users className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">Comunidade Médica</h4>
                                    <p className="text-gray-600">Plataforma de colaboração entre profissionais de saúde</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RoadmapPage;