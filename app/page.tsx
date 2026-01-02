"use client";

import { useState, useEffect } from 'react';
import { 
  ChefHat, Factory, Wrench, CheckCircle2, 
  BarChart3, Smartphone, ArrowRight, ShieldCheck, Zap,
  Globe 
} from 'lucide-react';
import { motion } from "framer-motion";
import Link from 'next/link';

// Componentes UI (Shadcn)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-[#0F2854] overflow-x-hidden">
      
      {/* NAV BAR */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0F2854]/90 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5' 
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white">
            NUCLEA <span className="text-[#4988C4]">TECH</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 text-sm font-medium text-white/90">
            <a href="#soluciones" className="hover:text-[#BDE8F5] transition">Soluciones</a>
            <a href="#tecnologia" className="hover:text-[#BDE8F5] transition">Tecnología</a>
            <Link href="/about" className="hover:text-[#BDE8F5] transition">Nosotros</Link>
          </div>
          <a href="#contacto">
            <Button className="bg-[#1C4D8D] hover:bg-[#4988C4] cursor-pointer text-white rounded-full px-6 font-bold shadow-md transition-all">
              Agendar Demo
            </Button>
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-175 flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-[#0F2854]/90"></div>
        </div>

        <div className="relative z-10 max-w-5xl px-6 text-center text-white mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              ¿Sabes realmente cómo está <br/>
              <span className="text-[#4988C4]">rindiendo tu operación?</span>
            </h1>
            
            <p className="text-xl text-[#BDE8F5] mb-8 max-w-3xl mx-auto leading-relaxed">
              Creamos sistemas que miden indicadores clave como producción, eficiencia y paros.
              Visualiza tu información en dashboards claros y toma mejores decisiones.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10 text-sm md:text-base font-medium text-white">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#4988C4]" /> Indicadores en tiempo real
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#4988C4]" /> Reportes automáticos
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-[#4988C4]" /> Acceso desde cualquier dispositivo
              </div>
            </div>

            <div className="flex justify-center">
              <a href="#contacto">
                <Button size="lg" className="bg-[#1C4D8D] hover:bg-[#4988C4] text-white text-lg px-8 h-14 rounded-xl shadow-lg shadow-[#1C4D8D]/50 border border-[#4988C4]/30 cursor-pointer">
                  Quiero Digitalizar mi Negocio
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN SOLUCIONES A MEDIDA */}
      <section id="soluciones" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-[#1C4D8D] font-bold tracking-wider text-sm uppercase bg-[#BDE8F5]/30 px-3 py-1 rounded-full">
              Soluciones digitales personalizadas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-[#0F2854]">
              Un sistema diseñado exactamente para tu negocio
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              No vendemos software genérico. Analizamos tu operación y desarrollamos una solución digital que se adapta a tus procesos, indicadores y objetivos.
            </p>
          </motion.div>

          {/* GRID DE TARJETAS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tarjeta 1 - Restaurantes */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }} viewport={{ once: true }}
              className="h-full"
            >
              {/* flex flex-col h-full asegura que la tarjeta ocupe toda la altura */}
              <Card className="h-full flex flex-col border-t-4 border-t-[#1C4D8D] hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#BDE8F5] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <ChefHat className="text-[#0F2854] w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-[#0F2854]">Gestión de Restaurantes</CardTitle>
                </CardHeader>
                {/* flex-1 hace que este contenido crezca, y mt-auto en el botón lo empuja al final */}
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm mb-6">
                    Controla pedidos, recetas, inventarios y costos desde un solo sistema centralizado.
                  </p>
                  <Button variant="outline" className="cursor-pointer w-full text-[#1C4D8D] border-[#1C4D8D] hover:bg-[#BDE8F5] mt-auto">Ver solución</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tarjeta 2 - Indicadores / OEE */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-t-4 border-t-[#4988C4] hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#BDE8F5] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <BarChart3 className="text-[#0F2854] w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-[#0F2854]">Indicadores y Dashboards</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm mb-6">
                    Visualiza el desempeño real de tu negocio con métricas claras y en tiempo real.
                  </p>
                  <Button variant="outline" className="cursor-pointer w-full text-[#1C4D8D] border-[#1C4D8D] hover:bg-[#BDE8F5] mt-auto">Ver solución</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tarjeta 3 - Mantenimiento */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-t-4 border-t-[#0F2854] hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#BDE8F5] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Wrench className="text-[#0F2854] w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-[#0F2854]">Gestión de Mantenimiento</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm mb-6">
                    Digitaliza órdenes de trabajo, tiempos de paro y seguimiento de activos.
                  </p>
                  <Button variant="outline" className="cursor-pointer w-full text-[#1C4D8D] border-[#1C4D8D] hover:bg-[#BDE8F5] mt-auto">Ver solución</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tarjeta 4 - Web Apps */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full flex flex-col border-t-4 border-t-[#4988C4] hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#BDE8F5] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="text-[#0F2854] w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl text-[#0F2854]">Desarrollo Web & Apps</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-slate-600 text-sm mb-6">
                    Landing pages, E-commerce y sitios web a medida para cualquier tipo de negocio.
                  </p>
                  <Button variant="outline" className="cursor-pointer w-full text-[#1C4D8D] border-[#1C4D8D] hover:bg-[#BDE8F5] mt-auto">Ver solución</Button>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECCIÓN VELOCIDAD / TECNOLOGÍA */}
      <section id="tecnologia" className="py-24 bg-[#0F2854] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Información clara, rápida y <span className="text-[#4988C4]">disponible siempre</span>
            </h2>
            <p className="text-[#BDE8F5] mb-8 text-lg leading-relaxed">
              Nuestros sistemas están diseñados para responder al instante. Accede a tus datos en tiempo real, desde tu celular, tablet o computadora, estés donde estés.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
                <span className="flex items-center gap-2 bg-[#1C4D8D]/50 px-4 py-2 rounded-full border border-[#4988C4]/30 text-sm font-medium">
                    <Zap size={16} className="text-[#4988C4]"/> Datos en tiempo real
                </span>
                <span className="flex items-center gap-2 bg-[#1C4D8D]/50 px-4 py-2 rounded-full border border-[#4988C4]/30 text-sm font-medium">
                    <Smartphone size={16} className="text-[#4988C4]"/> Acceso desde cualquier lugar
                </span>
                <span className="flex items-center gap-2 bg-[#1C4D8D]/50 px-4 py-2 rounded-full border border-[#4988C4]/30 text-sm font-medium">
                    <ShieldCheck size={16} className="text-[#4988C4]"/> Información segura
                </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7 }}
            className="md:w-1/2 w-full"
          >
            <Card className="shadow-2xl border-0 bg-white/10 backdrop-blur-sm">
              <CardHeader className="space-y-3 border-b border-white/10 pb-4">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-4 w-1/3 bg-[#1C4D8D]" />
                    <div className="flex gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div className="flex items-end justify-between gap-2 h-30">
                    <Skeleton className="h-[40%] w-full bg-[#4988C4]/50 rounded-t-md" />
                    <Skeleton className="h-[70%] w-full bg-[#4988C4]/70 rounded-t-md" />
                    <Skeleton className="h-[50%] w-full bg-[#4988C4]/50 rounded-t-md" />
                    <Skeleton className="h-[90%] w-full bg-[#BDE8F5] rounded-t-md" />
                    <Skeleton className="h-[60%] w-full bg-[#4988C4]/50 rounded-t-md" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg">
                    <Skeleton className="h-10 w-10 rounded-full bg-[#1C4D8D]" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-3 w-[70%] bg-[#4988C4]/50" />
                      <Skeleton className="h-2 w-[40%] bg-[#4988C4]/30" />
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 bg-white/5 p-3 rounded-lg">
                    <Skeleton className="h-10 w-10 rounded-full bg-[#1C4D8D]" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-3 w-[60%] bg-[#4988C4]/50" />
                      <Skeleton className="h-2 w-[50%] bg-[#4988C4]/30" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-[#BDE8F5]">
        <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                
                <div className="md:w-1/2 bg-[#0F2854] p-10 text-white flex flex-col justify-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Empieza hoy la transformación digital de tu negocio
                    </h2>
                    <p className="text-[#BDE8F5] mb-8 text-lg">
                        Cuéntanos cómo funciona tu operación y te proponemos una solución digital hecha a tu medida.
                    </p>
                    <div className="mt-auto space-y-3">
                        <div className="flex items-center gap-3 text-[#4988C4]">
                            <Factory size={20} /> <span className="text-white text-sm">Industrial & Manufactura</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#4988C4]">
                            <ChefHat size={20} /> <span className="text-white text-sm">Restaurantes & Cocinas</span>
                        </div>
                        <div className="flex items-center gap-3 text-[#4988C4]">
                            <Globe size={20} /> <span className="text-white text-sm">Sitios Web & E-commerce</span>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 p-10">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#0F2854]">Nombre</label>
                            <Input placeholder="Tu nombre" className="border-[#4988C4]/30 focus:border-[#1C4D8D]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#0F2854]">Correo / Teléfono</label>
                            <Input placeholder="Contacto" className="border-[#4988C4]/30 focus:border-[#1C4D8D]" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-[#0F2854]">Mensaje</label>
                            <Textarea placeholder="Breve descripción de tu necesidad..." className="h-24 border-[#4988C4]/30 focus:border-[#1C4D8D]" />
                        </div>
                        <Button className="cursor-pointer w-full bg-[#1C4D8D] hover:bg-[#0F2854] text-white h-12 text-lg font-bold transition-colors">
                            Quiero mi sistema digital <ArrowRight className="ml-2 w-5 h-5"/>
                        </Button>
                    </form>
                </div>

            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F2854] text-[#BDE8F5] py-10 border-t border-[#1C4D8D]/30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-2xl font-black tracking-tighter text-white">
                NUCLEA <span className="text-[#4988C4]">TECH</span>
            </div>
            <p className="text-sm text-center md:text-right">
                © 2026 Nuclea Tech · Software a la medida para negocios que quieren crecer con datos
            </p>
        </div>
      </footer>
    </div>
  );
}