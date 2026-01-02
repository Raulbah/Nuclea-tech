'use server'

import { Resend } from 'resend';

// Inicializamos Resend con la llave que pusiste en .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function enviarCorreo(formData: FormData) {
    // Extraemos los datos del formulario
    const nombre = formData.get('nombre') as string;
    const contacto = formData.get('contacto') as string;
    const mensaje = formData.get('mensaje') as string;

    // Validación simple
    if (!nombre || !contacto || !mensaje) {
        return { success: false, error: 'Faltan campos' };
    }

    try {
        // Enviamos el correo
        await resend.emails.send({
        // Si usas el plan gratis de Resend, el 'from' DEBE ser onboarding@resend.dev
        from: 'Nuclea Web <onboarding@resend.dev>', 
        // Aquí pon TU correo personal para recibir las alertas
        to: ['raulbh.2110@gmail.com'], 
        subject: `Nuevo Cliente Potencial: ${nombre}`,
        html: `
            <h1>Nuevo mensaje desde Nuclea Tech</h1>
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Contacto:</strong> ${contacto}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${mensaje}</p>
        `
        });
        
        return { success: true };
    } catch (error) {
        console.error(error);
        return { success: false, error: 'Error al enviar el correo' };
    }
}