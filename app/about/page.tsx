"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Code, HeartHandshake } from 'lucide-react';
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
        
            {/* Navbar Simple */}
            <nav className="border-b border-slate-100 py-4 px-6 sticky top-0 bg-white/90 backdrop-blur-md z-50">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-900 transition font-medium">
                        <ArrowLeft size={18} /> Volver al inicio
                    </Link>
                    <span className="font-bold text-blue-900">NUCLEA TECH</span>
                </div>
            </nav>

            <div className="max-w-3xl mx-auto px-6 py-20">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-cyan-600 font-bold tracking-widest text-sm uppercase">Nuestra Misión</span>
                    <h1 className="text-4xl md:text-5xl font-black mt-3 mb-6 text-slate-900 leading-tight">
                        Entendemos el código,<br/>
                        pero primero entendemos <span className="text-blue-700">tu negocio</span>.
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        En Nuclea Tech no somos una fábrica de software genérico. Somos aliados estratégicos para dueños de restaurantes y gerentes de planta que buscan eficiencia real.
                    </p>
                </motion.div>

                {/* Imagen / Historia */}
                <motion.div 
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                    className="grid gap-12"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                        alt="Equipo trabajando" 
                        className="rounded-2xl shadow-xl w-full h-75 object-cover"
                    />

                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                <User className="text-cyan-600" /> ¿Quiénes somos?
                            </h2>
                            <p className="text-slate-600">
                                Somos un equipo apasionado por la tecnología aplicada a operaciones reales. Vimos cómo excelentes negocios perdían dinero por usar papel, Excel o software obsoleto. Decidimos cambiar eso creando herramientas modernas, rápidas y fáciles de usar.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                                <Code className="text-cyan-600" /> Nuestra Filosofía
                            </h2>
                            <p className="text-slate-600">
                                Creemos que el software no debe ser un dolor de cabeza. Debe ser invisible: funcionar tan bien que ni te des cuenta de que está ahí, mientras tus ventas suben y tus costos bajan.
                            </p>
                        </div>
                    </div>

                    {/* Founder / Team Card (Opcional, pero genera confianza) */}
                    <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-2xl font-bold text-blue-700">
                            NT
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold text-slate-900">Compromiso Nuclea Tech</h3>
                            <p className="text-slate-500 mt-2">
                                "Trabajamos mano a mano contigo. No entregamos un sistema y desaparecemos; te acompañamos en la implementación para asegurar el éxito."
                            </p>
                        </div>
                    </div>

                    <div className="text-center pt-10 border-t border-slate-100">
                        <h3 className="text-2xl font-bold mb-6">¿Te interesa trabajar con nosotros?</h3>
                        <Link href="/#contacto">
                            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 text-white px-10 h-14 rounded-full text-lg shadow-lg">
                                Hablemos <HeartHandshake className="ml-2"/>
                            </Button>
                        </Link>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}