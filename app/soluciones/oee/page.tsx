"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Check, X, ArrowLeft, PlayCircle, Zap, Shield, Server, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";
import { Outfit } from 'next/font/google';

// Fuente
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

// DATOS DE EJEMPLO (Puedes cambiarlos por los reales)
const FEATURES = [
    { name: "Usuarios Ilimitados", plan1: true, plan2: true },
    { name: "Gestión de Recetas y Costos", plan1: true, plan2: true },
    { name: "Comandas en Tiempo Real (KDS)", plan1: true, plan2: true },
    { name: "Control de Inventario Avanzado", plan1: false, plan2: true },
    { name: "Reportes de Inteligencia de Negocios", plan1: "Básico", plan2: "Avanzado" },
    { name: "Soporte Técnico", plan1: "8/5", plan2: "24/7 VIP" },
    { name: "Actualizaciones de por vida", plan1: true, plan2: false },
    { name: "Hosting en Nube", plan1: true, plan2: "Tu Servidor" },
];

export default function oeePage() {
    return (
        <div className={`min-h-screen bg-[#030712] text-slate-200 font-sans ${outfit.className} selection:bg-[#d524fd] selection:text-white`}>
        
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-[#d524fd]/20">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-[#d524fd] hover:text-white transition group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> 
                    <span className="font-semibold tracking-wide">Volver al Inicio</span>
                </Link>
                <div className="text-xl font-black tracking-tighter text-white">
                    NUCLEA <span className="text-[#26bafd]">TECH</span>
                </div>
            </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 py-16">
            
            {/* HERO SECTION */}
            <div className="text-center mb-16">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <span className="text-[#d524fd] font-bold tracking-widest text-sm uppercase mb-4 block">Soluciones de Produccion</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
                        Tu Negocio, Controlada al <span className="text-transparent bg-clip-text bg-linear-to-r from-[#d524fd] to-[#26bafd]">100%</span>
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                        Olvídate del papel y el molesto Excel. Nuesto sistema OEE te brinda control total sobre tu producción, optimizando cada proceso para maximizar eficiencia y rentabilidad.
                    </p>
                </motion.div>
            </div>

            {/* VIDEO DEMO */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-3xl overflow-hidden border border-[#26bafd]/30 shadow-[0_0_50px_rgba(38,186,253,0.15)] mb-24 group"
            >
                {/* Placeholder de Video - Cambia el src por tu video real o embed de YouTube */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 group-hover:bg-slate-900/30 transition-all cursor-pointer">
                    <div className="w-20 h-20 bg-[#d524fd] rounded-full flex items-center justify-center shadow-[0_0_30px_#d524fd] group-hover:scale-110 transition-transform">
                        <PlayCircle size={40} className="text-white ml-1" />
                    </div>
                </div>
                {/* <iframe src="URL_DE_TU_VIDEO" className="w-full h-full" /> */}
                <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070" className="w-full h-full object-cover opacity-50" />
            </motion.div>

            {/* PRICING CARDS */}
            <div className="grid md:grid-cols-3 gap-8 mb-24">
                
                {/* PLAN 1: MENSUALIDAD */}
                <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 hover:border-[#26bafd] hover:shadow-[0_0_30px_rgba(38,186,253,0.1)] transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#26bafd] to-transparent"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">Licencia SaaS</h3>
                    <p className="text-slate-400 text-sm mb-6">Ideal para empezar sin inversión inicial alta.</p>
                    <div className="text-4xl font-black text-[#26bafd] mb-6">
                        $99 <span className="text-lg text-slate-500 font-normal">/mes</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#26bafd]"/> Hosting Incluido (AWS)</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#26bafd]"/> Actualizaciones Automáticas</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#26bafd]"/> Soporte 24/7</li>
                    </ul>
                    <Button className="w-full bg-[#26bafd] hover:bg-[#1e9bc9] text-black font-bold">Elegir Mensual</Button>
                </div>

                {/* PLAN 2: LICENCIA ÚNICA */}
                <div className="bg-[#0f0f11] border border-[#d524fd] rounded-2xl p-8 shadow-[0_0_30px_rgba(213,36,253,0.15)] relative overflow-hidden transform md:-translate-y-4">
                    <div className="absolute top-0 right-0 bg-[#d524fd] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MÁS VENDIDO</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Licencia Vitalicia</h3>
                    <p className="text-slate-400 text-sm mb-6">Un solo pago. El software es tuyo para siempre.</p>
                    <div className="text-4xl font-black text-[#d524fd] mb-6">
                        $1,499 <span className="text-lg text-slate-500 font-normal">/único</span>
                    </div>
                    <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#d524fd]"/> Código Fuente Incluido</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#d524fd]"/> Sin pagos mensuales</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-[#d524fd]"/> Instalación en tu Servidor</li>
                    </ul>
                    <Button className="w-full bg-[#d524fd] hover:bg-[#b51dd9] text-white font-bold shadow-[0_0_20px_rgba(213,36,253,0.4)]">Comprar Licencia</Button>
                </div>

                {/* PLAN 3: CUSTOM */}
                <div className="bg-[#0a0a0a] border border-slate-800 rounded-2xl p-8 hover:border-white transition-all duration-300 group">
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-slate-400 text-sm mb-6">Para cadenas de restaurantes y franquicias.</p>
                    <div className="text-4xl font-black text-white mb-6">
                        A Medida
                    </div>
                    <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                        <li className="flex items-center gap-2"><Check size={16} className="text-white"/> Multi-sucursal Centralizado</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-white"/> Integración con ERPs (SAP, Oracle)</li>
                        <li className="flex items-center gap-2"><Check size={16} className="text-white"/> Desarrollo de módulos propios</li>
                    </ul>
                    <Button variant="outline" className="w-full text-white border-slate-600 hover:bg-white hover:text-black">Cotizar Proyecto</Button>
                </div>
            </div>

            {/* TABLA COMPARATIVA */}
            <div className="mb-24 overflow-x-auto">
                <h2 className="text-3xl font-bold text-white mb-8 text-center">Comparativa de Funciones</h2>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-slate-800">
                            <th className="p-4 text-slate-400 font-normal">Características</th>
                            <th className="p-4 text-[#26bafd] font-bold text-center">Mensual (SaaS)</th>
                            <th className="p-4 text-[#d524fd] font-bold text-center">Vitalicia (Único)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {FEATURES.map((feat, i) => (
                            <tr key={i} className="border-b border-slate-800 hover:bg-white/5 transition-colors">
                                <td className="p-4 text-white font-medium">{feat.name}</td>
                                <td className="p-4 text-center">
                                    {typeof feat.plan1 === 'boolean' ? (
                                        feat.plan1 ? <Check size={20} className="mx-auto text-[#26bafd]"/> : <X size={20} className="mx-auto text-slate-600"/>
                                    ) : <span className="text-slate-300 text-sm">{feat.plan1}</span>}
                                </td>
                                <td className="p-4 text-center">
                                    {typeof feat.plan2 === 'boolean' ? (
                                        feat.plan2 ? <Check size={20} className="mx-auto text-[#d524fd]"/> : <X size={20} className="mx-auto text-slate-600"/>
                                    ) : <span className="text-slate-300 text-sm">{feat.plan2}</span>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* CUSTOMIZE SECTION (NO ES LO QUE BUSCAS?) */}
            <div className="rounded-3xl bg-linear-to-r from-[#1a0b2e] to-[#030712] border border-[#d524fd]/30 p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#d524fd] rounded-full blur-[100px] opacity-20"></div>
                
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿No es exactamente lo que buscas?</h2>
                    <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                        Cada negocio es un mundo. Si necesitas un módulo especial, una integración rara o un diseño específico, lo construimos para ti.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <Link href="/#contacto">
                            <Button size="lg" className="bg-[#d524fd] hover:bg-[#b51dd9] text-white font-bold h-14 px-8 shadow-[0_0_20px_rgba(213,36,253,0.4)]">
                                Personalizar mi Solución <Zap size={20} className="ml-2"/>
                            </Button>
                        </Link>
                        <a href="https://wa.me/5215512345678" target="_blank">
                            <Button size="lg" variant="outline" className="border-[#26bafd] text-[#26bafd] hover:bg-[#26bafd] hover:text-black font-bold h-14 px-8">
                                Consultar con Experto
                            </Button>
                        </a>
                    </div>
                </div>
            </div>

        </div>
        </div>
    );
}