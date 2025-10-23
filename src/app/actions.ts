
'use server';

import { z } from 'zod';
import { generateSeoKeywordsAndTopics } from '@/ai/flows/generate-seo-keywords-and-topics';

const seoSchema = z.object({
  businessDescription: z.string().min(10, { message: 'La descripción debe tener al menos 10 caracteres.' }),
});

export async function generateSeoAction(prevState: any, formData: FormData) {
  const validatedFields = seoSchema.safeParse({
    businessDescription: formData.get('businessDescription'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Error de validación.',
      errors: validatedFields.error.flatten().fieldErrors,
      data: null,
    };
  }

  try {
    const result = await generateSeoKeywordsAndTopics(validatedFields.data.businessDescription);
    return {
      message: 'Contenido SEO generado con éxito.',
      errors: null,
      data: result,
    };
  } catch (error) {
    console.error('Error generating SEO content:', error);
    return {
      message: 'Hubo un error al generar el contenido con la IA. Por favor, inténtalo de nuevo.',
      errors: null,
      data: null,
    };
  }
}

const contactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export async function sendContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Por favor, corrige los errores del formulario.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // ** Email Sending Logic **
  // This is where you would integrate an email sending service (e.g., Resend, SendGrid).
  // The `validatedFields.data` object contains the form submission.
  // Example:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  //
  // try {
  //   await resend.emails.send({
  //     from: 'onboarding@resend.dev',
  //     to: 'tecnologiamarketin@gmail.com',
  //     subject: `Nuevo Mensaje de Contacto de ${validatedFields.data.name}`,
  //     html: `<p><strong>Nombre:</strong> ${validatedFields.data.name}</p>
  //            <p><strong>Email:</strong> ${validatedFields.data.email}</p>
  //            <p><strong>Mensaje:</strong> ${validatedFields.data.message}</p>`,
  //   });
  // } catch (error) {
  //    console.error('Email sending error:', error);
  //    return {
  //      message: 'Hubo un error al enviar el mensaje. Inténtalo más tarde.',
  //      errors: null,
  //      success: false,
  //    };
  // }

  console.log('Contact Form Submission for tecnologiamarketin@gmail.com:');
  console.log(validatedFields.data);

  return {
    message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.',
    errors: null,
    success: true,
  };
}
