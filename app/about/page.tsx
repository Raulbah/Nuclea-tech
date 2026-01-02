"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ArrowLeft, User, Code2, Cpu, Sparkles, Rocket } from 'lucide-react';
import { motion } from "framer-motion";
import { Outfit } from 'next/font/google';

// Configuración de la fuente (igual que en la landing)
const outfit = Outfit({ 
    subsets: ['latin'],
    weight: ['300', '400', '600', '800'],
    variable: '--font-outfit',
});

export default function AboutPage() {
    return (
        <div className={`min-h-screen bg-[#030712] text-slate-200 font-sans overflow-x-hidden ${outfit.className} selection:bg-[#d524fd] selection:text-white`}>
        
        {/* ELEMENTOS DE FONDO (Glows) */}
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-[#d524fd] rounded-full blur-[150px] opacity-10"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-100 h-100 bg-[#26bafd] rounded-full blur-[150px] opacity-10"></div>
        </div>

        {/* NAVBAR SIMPLE */}
        <nav className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-[#26bafd]/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-[#26bafd] hover:text-white transition group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> 
                    <span className="font-semibold tracking-wide">Volver</span>
                </Link>
                
                <div className="text-xl font-black tracking-tighter text-white flex items-center gap-2">
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-white to-slate-400">
                    NUCLEA
                    </span> 
                    <span className="text-[#26bafd] drop-shadow-[0_0_5px_rgba(38,186,253,0.8)]">TECH</span>
                </div>
            </div>
        </nav>

        <div className="max-w-4xl mx-auto px-6 py-20">
            
            {/* HEADER */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                className="text-center mb-20"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#26bafd]/30 bg-[#26bafd]/10 text-[#26bafd] text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_10px_rgba(38,186,253,0.2)]">
                    <Sparkles size={14}/> Nuestra Identidad
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    No somos una agencia tradicional.<br/>
                    Somos <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d524fd] to-[#26bafd] drop-shadow-[0_0_20px_rgba(213,36,253,0.3)]">Arquitectos de Datos.</span>
                </h1>
                <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
                    Combinamos la precisión de la ingeniería industrial con la velocidad del desarrollo web moderno.
                </p>
            </motion.div>

            {/* HISTORIA / IMAGEN */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                <motion.div 
                    initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                    className="relative group"
                >
                    {/* Marco Neón */}
                    <div className="absolute -inset-1 bg-linear-to-r from-[#d524fd] to-[#26bafd] rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0a0a]">
                        <img 
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" 
                            alt="Cyberpunk Tech" 
                            className="w-full h-100 object-cover opacity-80 group-hover:opacity-100 transition duration-500 mix-blend-overlay"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#030712] via-transparent to-transparent"></div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                            <User className="text-[#d524fd]" /> El Origen
                        </h2>
                        <p className="text-slate-400 leading-relaxed font-light">
                            Nuclea Tech nació de una frustración: ver negocios increíbles frenados por herramientas del pasado. Cocinas perdiendo comandas en papel y fábricas adivinando su producción con Excel.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-white">
                            <Cpu className="text-[#26bafd]" /> La Evolución
                        </h2>
                        <p className="text-slate-400 leading-relaxed font-light">
                            Decidimos fusionar dos mundos: la **Ingeniería de Procesos** (OEE, Lean Manufacturing) y el **Desarrollo Full Stack** (Next.js, Bases de datos en tiempo real). El resultado es software que no solo se ve bien, sino que optimiza flujos de trabajo.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* VALORES (GRID) */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} viewport={{ once: true }}
                className="mb-24"
            >
                <h3 className="text-3xl font-bold text-center mb-10 text-white">Nuestro Código Genético</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Velocidad Extrema", desc: "No nos gustan las pantallas de carga. Usamos Next.js para interacciones instantáneas.", icon: Rocket, color: "#d524fd" },
                        { title: "Diseño Futurista", desc: "Software empresarial que parece un videojuego. Interfaces oscuras y cómodas.", icon: Sparkles, color: "#26bafd" },
                        { title: "Código Limpio", desc: "Escalabilidad real. Tu sistema crece contigo sin romperse.", icon: Code2, color: "#d524fd" }
                    ].map((item, index) => (
                        <div key={index} className="bg-[#0a0a0a] border border-slate-800 p-8 rounded-2xl hover:border-[#26bafd]/50 hover:shadow-[0_0_20px_rgba(38,186,253,0.1)] transition duration-300 group">
                            <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition border border-slate-800">
                                <item.icon style={{ color: item.color }} size={24} className="drop-shadow-[0_0_5px_currentColor]"/>
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-slate-400 text-sm font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* CTA FINAL */}
            <div className="relative p-1 rounded-2xl bg-linear-to-r from-[#d524fd] to-[#26bafd]">
                <div className="bg-[#030712] rounded-xl p-10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                    
                    <h2 className="text-3xl font-bold text-white mb-4 relative z-10">¿Listo para innovar?</h2>
                    <p className="text-slate-300 mb-8 max-w-xl mx-auto font-light relative z-10">
                        No importa si tienes una Dark Kitchen o una planta de inyección de plástico. Tenemos la arquitectura lista.
                    </p>
                    <Link href="/#contacto" className="relative z-10">
                        <Button className="cursor-pointer bg-white text-black hover:bg-[#26bafd] hover:text-white font-bold rounded-full px-10 h-12 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300">
                            Cotizar Mi Sistema
                        </Button>
                    </Link>
                </div>
            </div>

        </div>
        </div>
    );
}