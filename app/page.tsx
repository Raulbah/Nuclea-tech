"use client";

import React, { useState, useEffect } from 'react';
import { 
  ChefHat, Factory, Wrench, CheckCircle2, 
  BarChart3, Smartphone, ArrowRight, ShieldCheck, Zap,
  Globe 
} from 'lucide-react';
import { motion } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';

// Importamos la fuente tecnológica
import { Outfit } from 'next/font/google';

// Componentes UI (Shadcn) - Asumimos que soportan clases custom
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { enviarCorreo } from './actions';

// Configuración de la fuente
const outfit = Outfit({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-outfit',
});

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

// Colores definidos para reutilizar en clases dinámicas si fuera necesario
// Purple: #d524fd
// Cyan: #26bafd

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    setEnviando(true);
    
    const formData = new FormData(event.currentTarget);
    const response = await enviarCorreo(formData);
    
    if (response.success) {
        setEnviado(true);
    } else {
        alert("Hubo un error al enviar. Por favor intenta de nuevo.");
    }
    setEnviando(false);
  }

  return (
    <div className={`min-h-screen bg-[#030712] text-slate-200 overflow-x-hidden ${outfit.className} selection:bg-[#d524fd] selection:text-white`}>
      
      {/* NAV BAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled 
            ? 'bg-[#030712]/80 backdrop-blur-lg border-[#26bafd]/20 shadow-[0_0_15px_rgba(38,186,253,0.1)] py-2' 
            : 'bg-transparent py-6' 
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center group">
            {/* Logo placeholder - Reemplazar con tu SVG real */}
            <div className="mr-2 relative w-10 h-10">
                {/* Si la imagen no carga, mostramos un fallback visual */}
                <Image
                    src="/Logo.svg" 
                    alt="NT"
                    width={40}
                    height={40}
                    className="object-contain relative z-10"
                />
                {/* Efecto Glow detrás del logo */}
                <div className="absolute inset-0 bg-linear-to-r from-[#d524fd] to-[#26bafd] blur-lg opacity-50 group-hover:opacity-100 transition duration-500 rounded-full"></div>
            </div>
            <div className='hidden md:flex'>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-white to-slate-400 group-hover:to-[#26bafd] transition-colors">
                NUCLEA
              </span> 
              <span className="ml-1 text-[#26bafd] drop-shadow-[0_0_5px_rgba(38,186,253,0.8)]">TECH</span>
            </div>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#soluciones" className="hover:text-[#d524fd] transition hover:drop-shadow-[0_0_8px_#d524fd]">Soluciones</a>
            <a href="#tecnologia" className="hover:text-[#26bafd] transition hover:drop-shadow-[0_0_8px_#26bafd]">Tecnología</a>
            <Link href="/about" className="hover:text-white transition">Nosotros</Link>
          </div>
          
          <a href="#contacto">
            <Button className="cursor-pointer bg-transparent border border-[#26bafd] text-[#26bafd] hover:bg-[#26bafd] hover:text-black rounded-full px-6 font-bold shadow-[0_0_10px_rgba(38,186,253,0.3)] hover:shadow-[0_0_20px_rgba(38,186,253,0.6)] transition-all duration-300 md:text-sm text-xs h-10 flex items-center">
              Agendar Demo
            </Button>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-200 flex items-center justify-center overflow-hidden">
        {/* Background Image Darkened */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' }}
        ></div>
        {/* Capa de degradado oscuro */}
        <div className="absolute inset-0 bg-linear-to-b from-[#030712] via-[#030712]/90 to-[#030712]"></div>
        
        {/* Elementos decorativos de fondo (Orbes de luz) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d524fd] rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#26bafd] rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-5xl px-5 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-7xl font-extrabold mb-5 leading-tight tracking-tight">
              ¿Sabes realmente cómo está <br/>
              <span className="bg-clip-text text-transparent bg-linear-to-r from-[#d524fd] via-[#be69d8] to-[#26bafd] drop-shadow-[0_0_30px_rgba(213,36,253,0.4)]">
                rindiendo tu negocio?
              </span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Creamos sistemas que miden indicadores clave para la toma de decisiones.
              No mas <span className="text-[#26bafd]">papel</span> lleva tu negocio a todas partes.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 mb-12 text-sm md:text-base font-medium text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#d524fd] drop-shadow-[0_0_8px_#d524fd]" /> Indicadores en tiempo real
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#26bafd] drop-shadow-[0_0_8px_#26bafd]" /> Reportes automáticos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#d524fd] drop-shadow-[0_0_8px_#d524fd]" /> Acceso universal
              </div>
            </div>

            <div className="flex justify-center relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-[#d524fd] to-[#26bafd] rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <a href="#contacto" className="relative">
                <Button size="lg" className="bg-black hover:bg-slate-900 text-white text-lg px-10 h-16 rounded-xl border border-white/10 cursor-pointer transition-all flex items-center gap-2">
                  Quiero Digitalizar mi Negocio <ArrowRight className="text-[#26bafd]"/>
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN SOLUCIONES A MEDIDA */}
      <section id="soluciones" className="py-24 bg-[#030712] relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-[#26bafd] font-bold tracking-widest text-sm uppercase">
              Soluciones Personalizadas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
              Un sistema diseñado <span className="text-[#d524fd]">exactamente para ti</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light">
              No vendemos software genérico. Analizamos tu operación y desarrollamos una arquitectura digital que se adapta a tus procesos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Template de Tarjeta Neon */}
            {[
                { 
                  title: "Restaurantes", 
                  icon: ChefHat, 
                  color: "#d524fd", 
                  desc: "Controla pedidos, recetas, inventarios y costos...", 
                  link: "/soluciones/restaurantes" // <--- NUEVO LINK
                },
                { 
                  title: "Indicadores OEE", 
                  icon: BarChart3, 
                  color: "#26bafd", 
                  desc: "Visualiza el desempeño real de tu negocio...", 
                  link: "/soluciones/oee" // <--- NUEVO LINK
                },
                { 
                  title: "Mantenimiento", 
                  icon: Wrench, 
                  color: "#d524fd", 
                  desc: "Digitaliza órdenes de trabajo...", 
                  link: "/soluciones/mantenimiento" // <--- NUEVO LINK
                },
                { 
                  title: "Web & Apps", 
                  icon: Globe, 
                  color: "#26bafd", 
                  desc: "Landing pages, E-commerce y sitios web...", 
                  link: "/soluciones/web" // <--- NUEVO LINK
                }

            ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index, duration: 0.5 }} viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col bg-[#0a0a0a] border border-slate-800 hover:border-[#d524fd]/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(213,36,253,0.15)] relative overflow-hidden">
                    {/* Gradiente sutil en hover */}
                    <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[${item.color}] to-transparent opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                    
                    <CardHeader>
                      <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-slate-800 group-hover:border-[#26bafd]/30">
                        <item.icon className="w-8 h-8 transition-colors duration-300" style={{ color: item.color }} />
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-[#26bafd] transition-colors">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col">
                      <p className="text-slate-400 text-sm mb-6 font-light leading-relaxed">
                        {item.desc}
                      </p>
                      <Link href={item.link} className="w-full mt-auto">
                        <Button variant="outline" className="w-full bg-transparent text-white border-slate-700 hover:border-[#d524fd] hover:text-[#d524fd] hover:bg-transparent cursor-pointer transition-all">
                            Ver solución
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN VELOCIDAD / TECNOLOGÍA */}
      <section id="tecnologia" className="py-24 bg-[#050505] text-white overflow-hidden relative border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Información clara, rápida y <span className="bg-clip-text text-transparent bg-linear-to-r from-[#26bafd] to-[#d524fd]">disponible siempre</span>
            </h2>
            <p className="text-slate-400 mb-8 text-lg leading-relaxed font-light">
              Nuestros sistemas están diseñados para responder al instante. Accede a tus datos en tiempo real, desde tu celular, tablet o computadora, estés donde estés.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
                {[
                    { text: "Datos en tiempo real", icon: Zap },
                    { text: "Acceso global", icon: Smartphone },
                    { text: "Cifrado seguro", icon: ShieldCheck }
                ].map((tag, i) => (
                    <span key={i} className="flex items-center gap-2 bg-slate-900/50 px-4 py-2 rounded-full border border-slate-800 text-sm font-medium hover:border-[#26bafd]/50 transition-colors cursor-default">
                        <tag.icon size={16} className="text-[#26bafd]"/> {tag.text}
                    </span>
                ))}
            </div>
          </motion.div>

          {/* TARJETA DEMO SKELETON TECH */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full"
          >
            <Card className="shadow-2xl border border-slate-800 bg-[#0a0a0a]/80 backdrop-blur-md relative overflow-hidden">
              {/* Efecto de luz pasando */}
              <div className="absolute top-0 -left-full w-[50%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-[shimmer_3s_infinite]"></div>

              <CardHeader className="space-y-3 border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-1/3 bg-slate-800" />
                    <div className="flex gap-2">
                        <div className="h-2 w-2 rounded-full bg-[#ff5f56]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#ffbd2e]"></div>
                        <div className="h-2 w-2 rounded-full bg-[#27c93f]"></div>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-end justify-between gap-2 h-32">
                    <Skeleton className="h-[40%] w-full bg-[#26bafd]/20 rounded-t-sm" />
                    <Skeleton className="h-[70%] w-full bg-[#d524fd]/40 rounded-t-sm" />
                    <Skeleton className="h-[50%] w-full bg-[#26bafd]/20 rounded-t-sm" />
                    <Skeleton className="h-[90%] w-full bg-[#26bafd] shadow-[0_0_15px_#26bafd] rounded-t-sm" />
                    <Skeleton className="h-[60%] w-full bg-[#d524fd]/20 rounded-t-sm" />
                </div>
                
                <div className="space-y-3">
                  {[1, 2].map((_, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-slate-900/50 p-3 rounded-lg border border-slate-800">
                        <Skeleton className="h-10 w-10 rounded-full bg-slate-800" />
                        <div className="space-y-2 flex-1">
                        <Skeleton className="h-3 w-[70%] bg-slate-700" />
                        <Skeleton className="h-2 w-[40%] bg-slate-800" />
                        </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 relative overflow-hidden">
        {/* Fondo degradado sutil */}
        <div className="absolute inset-0 bg-linear-to-b from-[#030712] to-[#1a0b2e] opacity-80"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="bg-[#0a0a0a] border border-slate-800 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row">
                
                <div className="md:w-1/2 p-10 text-white flex flex-col justify-center relative overflow-hidden">
                    {/* Decoración fondo panel izquierdo */}
                    <div className="absolute inset-0 bg-linear-to-br from-[#1c0c2e] to-[#030712] z-0"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-[#d524fd] to-[#26bafd]"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">
                            Empieza hoy la <span className="text-[#d524fd]">transformación digital</span>
                        </h2>
                        <p className="text-slate-400 mb-8 text-lg font-light">
                            Cuéntanos cómo funciona tu operación y te proponemos una solución digital hecha a tu medida.
                        </p>
                        <div className="mt-auto space-y-4">
                            {[
                                {icon: Factory, text: "Industrial & Manufactura"},
                                {icon: ChefHat, text: "Restaurantes & Cocinas"},
                                {icon: Globe, text: "Sitios Web & E-commerce"}
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-[#26bafd]">
                                    <item.icon size={20} className="drop-shadow-[0_0_5px_#26bafd]"/> 
                                    <span className="text-slate-300 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FORMULARIO LADO DERECHO */}
                <div className="md:w-1/2 p-10 flex flex-col justify-center min-h-112.5 bg-[#050505]">
                    {enviado ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center justify-center text-center space-y-4"
                        >
                            <div className="w-20 h-20 bg-[#26bafd]/10 border border-[#26bafd] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(38,186,253,0.3)]">
                                <CheckCircle2 className="w-10 h-10 text-[#26bafd]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">¡Mensaje Recibido!</h3>
                            <p className="text-slate-400">
                                Gracias por contactar a Nuclea Tech. Analizaremos tu solicitud y te contactaremos pronto.
                            </p>
                            <Button 
                                variant="outline" 
                                onClick={() => setEnviado(false)} 
                                className="mt-4 border-slate-700 text-slate-300 hover:border-[#d524fd] hover:text-[#d524fd] hover:bg-transparent"
                            >
                                Enviar otro mensaje
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#26bafd]">Nombre</label>
                                <Input name="nombre" required placeholder="Tu nombre" className="bg-[#0a0a0a] border-slate-800 text-white placeholder:text-slate-600 focus:border-[#d524fd] focus:ring-0 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#26bafd]">Correo / Teléfono</label>
                                <Input name="contacto" required placeholder="Contacto" className="bg-[#0a0a0a] border-slate-800 text-white placeholder:text-slate-600 focus:border-[#d524fd] focus:ring-0 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[#26bafd]">Mensaje</label>
                                <Textarea name="mensaje" required placeholder="Describe tu proyecto..." className="h-24 bg-[#0a0a0a] border-slate-800 text-white placeholder:text-slate-600 focus:border-[#d524fd] focus:ring-0 transition-colors" />
                            </div>
                            <Button 
                                type="submit" 
                                disabled={enviando}
                                className="w-full bg-linear-to-r from-[#d524fd] to-[#26bafd] hover:from-[#be20e0] hover:to-[#21a0d8] text-white h-12 text-lg font-bold transition-all shadow-[0_0_15px_rgba(213,36,253,0.4)] hover:shadow-[0_0_25px_rgba(38,186,253,0.6)] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {enviando ? "Enviando..." : "Cotizar Pagina"} 
                                {!enviando && <ArrowRight className="ml-2 w-5 h-5"/>}
                            </Button>
                        </form>
                    )}
                </div>

            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030712] text-slate-500 py-10 border-t border-slate-900 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-[#26bafd]/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#d524fd] to-[#26bafd] flex items-center justify-center text-[10px] text-white font-bold shadow-[0_0_10px_#d524fd]">NT</div>
                <span>NUCLEA <span className="text-[#26bafd]">TECH</span></span>
            </div>
            <p className="text-sm text-center md:text-right font-light">
                © 2026 Nuclea Tech · El futuro de tu operación.
            </p>
        </div>
      </footer>
      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <a 
        href="https://wa.me/8145942033?text=Hola%20Nuclea%20Tech,%20me%20interesa%20una%20cotización."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur opacity-40 group-hover:opacity-100 animate-pulse transition duration-500"></div>
        <div className="relative bg-black border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300 flex items-center gap-2">
          {/* Icono de WhatsApp SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span className="hidden group-hover:block font-bold whitespace-nowrap pr-2">
            Chat en vivo
          </span>
        </div>
      </a>
    </div>
  );
}