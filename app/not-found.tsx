"use client";

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle, ArrowLeft } from 'lucide-react';
import { motion } from "framer-motion";
import { Outfit } from 'next/font/google';

// Configuración de fuente
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export default function NotFound() {
    return (
            <div className={`min-h-screen bg-[#030712] text-slate-200 flex items-center justify-center relative overflow-hidden font-sans ${outfit.className}`}>
            
            {/* ELEMENTOS DE FONDO (Glows oscuros) */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d524fd] rounded-full blur-[200px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#26bafd] rounded-full blur-[200px] opacity-10 animate-pulse delay-1000"></div>

            {/* RUIDO / GRID DE FONDO (Opcional para efecto tech) */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center px-6 max-w-2xl">
                
                {/* ICONO DE ALERTA ANIMADO */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-6"
                >
                    <div className="w-24 h-24 bg-[#0a0a0a] border border-[#d524fd]/50 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(213,36,253,0.2)] relative">
                        <AlertTriangle size={48} className="text-[#d524fd] drop-shadow-[0_0_10px_currentColor]" />
                        {/* Efecto Glitch decorativo */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-[#26bafd] opacity-50 animate-ping"></div>
                    </div>
                </motion.div>

                {/* NÚMERO 404 GIGANTE */}
                <motion.h1 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-8xl md:text-9xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-[#d524fd] via-white to-[#26bafd] drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                    404
                </motion.h1>

                {/* MENSAJE DE ERROR */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Fallo en el Sistema
                    </h2>
                    <p className="text-slate-400 text-lg mb-10 leading-relaxed font-light">
                        Parece que la página que buscas ha sido desconectada de la red o nunca existió.
                        <br className="hidden md:block"/>
                        Verifica la URL o regresa a la base de operaciones.
                    </p>

                    {/* BOTONES DE ACCIÓN */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button size="lg" className="bg-[#26bafd] hover:bg-[#1e95ca] text-black font-bold px-8 h-12 shadow-[0_0_20px_rgba(38,186,253,0.3)] transition-all w-full sm:w-auto">
                                <Home size={18} className="mr-2"/> Volver al Inicio
                            </Button>
                        </Link>
                        
                        <button onClick={() => window.history.back()} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium hover:underline underline-offset-4">
                            <ArrowLeft size={16}/> Regresar a la página anterior
                        </button>
                    </div>
                </motion.div>

                {/* DECORACIÓN TÉCNICA INFERIOR */}
                <div className="mt-20 pt-10 border-t border-slate-900 flex justify-between text-xs text-slate-600 font-mono uppercase tracking-widest">
                    <span>Error_Code: NULL_POINTER</span>
                    <span>Nuclea Tech System v.2.0</span>
                </div>

            </div>
        </div>
    );
}