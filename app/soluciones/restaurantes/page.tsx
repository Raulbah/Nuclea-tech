"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Check, X, ArrowLeft, PlayCircle, Zap, Star, Building2, Store } from 'lucide-react';
import { motion } from "framer-motion";
import { Outfit } from 'next/font/google';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

// --- CONFIGURACIÓN DE CONTACTO ---
const PHONE_NUMBER = "8145942033"; // <--- PON TU NÚMERO AQUÍ
// ---------------------------------

// DATOS DE PRECIOS
const PRICING: any = {
    mensual: [
        {
            name: "Básico",
            price: "$899",
            period: "/mes",
            description: "Para pequeños negocios y food trucks.",
            features: ["Control de productos", "Quiosco con impresión", "Dashboards de ventas", "Soporte limitado"],
            color: "white",
            icon: Store
        },
        {
            name: "Profesional",
            price: "$1,899",
            period: "/mes",
            description: "Para restaurantes en crecimiento.",
            features: ["Todo lo del Básico", "KDS (Pantalla Cocina)", "Pantalla Clientes (Listos)", "Inventario Unitario Auto", "Asesoría Mensual"],
            color: "#26bafd", // Cyan
            popular: true,
            icon: Star
        },
        {
            name: "Empresarial",
            price: "$2,499",
            period: "/mes",
            extra: "+ $1,299 x sucursal extra",
            description: "Para cadenas y franquicias.",
            features: ["Todo lo del Profesional", "Inventario Insumos (kg/L)", "Multi-usuarios y Sucursales", "KPIs Avanzados", "Soporte 24/7"],
            color: "#d524fd", // Purple
            icon: Building2
        }
    ],
    anual: [
        {
            name: "Básico",
            price: "$8,990",
            period: "/año",
            saved: "Ahorras $1,798",
            features: ["Control de productos", "Quiosco con impresión", "Dashboards de ventas", "Soporte limitado"],
            color: "white",
            icon: Store
        },
        {
            name: "Profesional",
            price: "$18,990",
            period: "/año",
            saved: "Ahorras $3,798",
            features: ["Todo lo del Básico", "KDS (Pantalla Cocina)", "Pantalla Clientes", "Inventario Unitario", "Asesoría Mensual"],
            color: "#26bafd",
            popular: true,
            icon: Star
        },
        {
            name: "Empresarial",
            price: "$24,990",
            period: "/año",
            saved: "Ahorras $4,998",
            features: ["Todo lo del Profesional", "Inventario Insumos (kg/L)", "Multi-sucursal", "Reportes KPIs", "Soporte 24/7"],
            color: "#d524fd",
            icon: Building2
        }
    ],
    unica: [
        {
            name: "Licencia Única",
            type: "Básica",
            price: "$24,999",
            period: "pago único",
            features: ["Acceso de por vida", "Sin mensualidades", "Instalación Local/Nube", "Código base Básico"],
            color: "white",
            icon: Store
        },
        {
            name: "Licencia Única",
            type: "Pro",
            price: "$49,999",
            period: "pago único",
            features: ["Acceso de por vida", "Todas las funciones Pro", "Código base Pro", "Sin mensualidades"],
            color: "#26bafd",
            popular: true,
            icon: Star
        },
        {
            name: "Licencia Única",
            type: "Empresarial",
            price: "$69,999",
            period: "pago único",
            features: ["Acceso de por vida", "Todas las funciones Ent.", "Multi-sucursal nativo", "Soporte Prioritario Vitalicio"],
            color: "#d524fd",
            icon: Building2
        }
    ]
};

// TABLA COMPARATIVA
const COMPARISON = [    
    { feature: "Quiosco + Tickets", basic: true, pro: true, ent: true },
    { feature: "Dashboards Básicos", basic: true, pro: true, ent: true },
    { feature: "Pantalla Cocina (KDS)", basic: false, pro: true, ent: true },
    { feature: "Pantalla Clientes", basic: false, pro: true, ent: true },
    { feature: "Inventario Unitario", basic: true, pro: true, ent: true },
    { feature: "Inventario Insumos (kg/L)", basic: false, pro: false, ent: true },
    { feature: "Multi-Sucursal", basic: false, pro: false, ent: true },
    { feature: "Multi-Usuario", basic: false, pro: false, ent: true },
    { feature: "Soporte", basic: "Limitado", pro: "Prioritario", ent: "24/7" },
];

export default function RestaurantPage() {

    // --- FUNCIÓN PARA GENERAR EL LINK DE WHATSAPP ---
    const handlePlanClick = (plan: any, cycle: string) => {
        // Definir texto amigable para la modalidad
        let modalidad = "Mensual";
        if (cycle === 'anual') modalidad = "Anual";
        if (cycle === 'unica') modalidad = "Pago Único (Licencia)";

        // Nombre del plan (usamos type si existe, si no name)
        const planName = plan.type ? `Licencia ${plan.type}` : plan.name;

        // Construir el mensaje
        const message = `
            Hola Nuclea Tech,
            Estoy viendo su página web y me interesa contratar este software para Restaurantes:

            *Plan:* ${planName}
            *Modalidad:* ${modalidad}
            *Precio:* ${plan.price} ${plan.period}

            ¿Me pueden ayudar con el proceso de pago e instalación?
        `.trim();

        // Codificar y abrir
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className={`min-h-screen bg-[#030712] text-slate-200 font-sans ${outfit.className} selection:bg-[#d524fd] selection:text-white`}>
            {/* NAVBAR */}
            <nav className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-[#26bafd]/20">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-[#26bafd] hover:text-white transition group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/> 
                        <span className="font-semibold tracking-wide">Volver al Inicio</span>
                    </Link>
                    <div className="text-xl font-black tracking-tighter text-white">
                        NUCLEA <span className="text-[#26bafd]">TECH</span>
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* HERO */}
                <div className="text-center mb-12">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-[#26bafd] font-bold tracking-widest text-sm uppercase mb-4 block">Software Gastronómico</span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Control Total de tu Restaurante<br/>
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#26bafd] to-[#d524fd]">Sin Complicaciones</span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
                            Desde el quiosco de pedidos hasta el inventario de insumos por gramaje. Todo conectado en tiempo real.
                        </p>
                    </motion.div>
                </div>
                {/* VIDEO DEMO PLACEHOLDER */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                    className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-3xl overflow-hidden border border-[#d524fd]/30 shadow-[0_0_50px_rgba(213,36,253,0.1)] mb-20 group"
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 group-hover:bg-slate-900/30 transition-all cursor-pointer">
                        <div className="w-20 h-20 bg-linear-to-r from-[#26bafd] to-[#d524fd] rounded-full flex items-center justify-center shadow-[0_0_30px_#d524fd] group-hover:scale-110 transition-transform">
                            <PlayCircle size={40} className="text-white ml-1" />
                        </div>
                    </div>
                    {/* Imagen Placeholder */}
                    <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070" className="w-full h-full object-cover opacity-60" alt="Dashboard Restaurante" />
                </motion.div>
                {/* PRICING TABS */}
                <div className="mb-24">
                    <h2 className="text-3xl font-bold text-white text-center mb-8">Elige tu Plan Ideal</h2>
                    <Tabs defaultValue="mensual" className="w-full">
                        <div className="flex justify-center mb-10">
                            <TabsList className="bg-slate-900 border border-slate-800 p-1 h-auto rounded-full">
                                <TabsTrigger value="mensual" className="cursor-pointer rounded-full px-6 py-2 text-sm data-[state=active]:bg-[#26bafd] data-[state=active]:text-black">Mensual</TabsTrigger>
                                <TabsTrigger value="anual" className="cursor-pointer rounded-full px-6 py-2 text-sm data-[state=active]:bg-[#d524fd] data-[state=active]:text-white">Anual (Ahorro)</TabsTrigger>
                                <TabsTrigger value="unica" className="cursor-pointer rounded-full px-6 py-2 text-sm data-[state=active]:bg-white data-[state=active]:text-black">Licencia Única</TabsTrigger>
                            </TabsList>
                        </div>
                        {/* CONTENIDO DE TABS */}
                        {['mensual', 'anual', 'unica'].map((cycle) => (
                            <TabsContent key={cycle} value={cycle}>
                                <div className="grid md:grid-cols-3 gap-8">
                                    {PRICING[cycle].map((plan: any, index: number) => (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }} 
                                            animate={{ opacity: 1, y: 0 }} 
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Card className={`h-full bg-[#0a0a0a] border ${plan.popular ? `border-[${plan.color}] shadow-[0_0_20px_${plan.color}40]` : 'border-slate-800'} relative overflow-hidden flex flex-col hover:border-opacity-100 transition-all duration-300`}>
                                                {/* Badge de Ahorro o Popular */}
                                                {plan.saved && (
                                                    <div className="absolute top-0 right-0 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-bl-lg border-l border-b border-green-500/30">
                                                        {plan.saved}
                                                    </div>
                                                )}
                                                {plan.popular && !plan.saved && (
                                                    <div className="absolute top-0 right-0 bg-[#26bafd] text-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                                                        RECOMENDADO
                                                    </div>
                                                )}
                                                <CardHeader>
                                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-700`} style={{ backgroundColor: `${plan.color}20` }}>
                                                        <plan.icon size={24} style={{ color: plan.color === 'white' ? '#94a3b8' : plan.color }} />
                                                    </div>
                                                    <CardTitle className="text-xl text-white">
                                                        {plan.type ? `${plan.type}` : plan.name}
                                                    </CardTitle>
                                                    <CardDescription className="text-slate-400">{plan.description || "Licencia de por vida"}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-1">
                                                    <div className="mb-6">
                                                        <span className="text-4xl font-black text-white">{plan.price}</span>
                                                        <span className="text-sm text-slate-500 font-normal"> {plan.period}</span>
                                                        {plan.extra && <p className="text-xs text-[#d524fd] mt-1 font-semibold">{plan.extra}</p>}
                                                    </div>

                                                    <ul className="space-y-3">
                                                        {plan.features.map((feature: string, i: number) => (
                                                            <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                                                                <Check size={16} className="mt-0.5 shrink-0" style={{ color: plan.color === 'white' ? 'white' : plan.color }} />
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CardContent>
                                                <CardFooter>
                                                    <Button 
                                                        onClick={() => handlePlanClick(plan, cycle)}
                                                        className="w-full font-bold cursor-pointer hover:opacity-90 transition-opacity"
                                                        style={{ 
                                                            backgroundColor: plan.color === 'white' ? '#1e293b' : plan.color,
                                                            color: plan.color === 'white' ? 'white' : 'black'
                                                        }}
                                                    >
                                                        Seleccionar Plan
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
                {/* TABLA COMPARATIVA */}
                <div className="mb-24 overflow-x-auto bg-[#0a0a0a] rounded-2xl border border-slate-800 p-6">
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">Comparativa Detallada</h2>
                    <table className="w-full text-left border-collapse min-w-150">
                        <thead>
                            <tr className="border-b border-slate-800">
                                <th className="p-4 text-slate-400 font-normal w-1/4">Funcionalidad</th>
                                <th className="p-4 text-white font-bold text-center w-1/4">Básico</th>
                                <th className="p-4 text-[#26bafd] font-bold text-center w-1/4">Profesional</th>
                                <th className="p-4 text-[#d524fd] font-bold text-center w-1/4">Empresarial</th>
                            </tr>
                        </thead>
                        <tbody>
                            {COMPARISON.map((row, i) => (
                                <tr key={i} className="border-b border-slate-800 hover:bg-white/5 transition-colors">
                                    <td className="p-4 text-slate-300 font-medium">{row.feature}</td>
                                    <td className="p-4 text-center">
                                        {typeof row.basic === 'boolean' ? (
                                            row.basic ? <Check size={20} className="mx-auto text-slate-400"/> : <X size={20} className="mx-auto text-slate-700"/>
                                        ) : <span className="text-slate-400 text-sm">{row.basic}</span>}
                                    </td>
                                    <td className="p-4 text-center bg-[#26bafd]/5">
                                        {typeof row.pro === 'boolean' ? (
                                            row.pro ? <Check size={20} className="mx-auto text-[#26bafd]"/> : <X size={20} className="mx-auto text-slate-700"/>
                                        ) : <span className="text-[#26bafd] text-sm font-semibold">{row.pro}</span>}
                                    </td>
                                    <td className="p-4 text-center bg-[#d524fd]/5">
                                        {typeof row.ent === 'boolean' ? (
                                            row.ent ? <Check size={20} className="mx-auto text-[#d524fd]"/> : <X size={20} className="mx-auto text-slate-700"/>
                                        ) : <span className="text-[#d524fd] text-sm font-semibold">{row.ent}</span>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* CTA FINAL (PERSONALIZA) */}
                <div className="rounded-3xl bg-linear-to-br from-[#0f172a] to-[#030712] border border-slate-800 p-10 md:p-16 text-center relative overflow-hidden group hover:border-[#26bafd]/30 transition-all">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#26bafd] rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿No encuentras lo que buscas?</h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            Si tu operación requiere integraciones especiales con ERPs o hardware específico, podemos personalizar el software para ti.
                        </p>
                        <div className="flex flex-col md:flex-row justify-center gap-4">
                            <a href="https://wa.me/8145942033" target="_blank">
                                <Button size="lg" className="cursor-pointer bg-[#26bafd] hover:bg-[#1e95ca] text-black font-bold h-14 px-8 shadow-[0_0_20px_rgba(38,186,253,0.3)]">
                                    Contactar experto <Zap size={20} className="ml-2"/>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}