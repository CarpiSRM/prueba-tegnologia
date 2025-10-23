'use server';

/**
 * @fileOverview Generates SEO keywords and content topics based on a business description.
 *
 * - generateSeoKeywordsAndTopics - A function that generates SEO keywords and content topics.
 * - GenerateSeoKeywordsAndTopicsInput - The input type for the generateSeoKeywordsAndTopics function.
 * - GenerateSeoKeywordsAndTopicsOutput - The return type for the generateSeoKeywordsAndTopics function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoKeywordsAndTopicsInputSchema = z.string().describe('A description of the business.');
export type GenerateSeoKeywordsAndTopicsInput = z.infer<typeof GenerateSeoKeywordsAndTopicsInputSchema>;

const GenerateSeoKeywordsAndTopicsOutputSchema = z.object({
  keywords: z.array(z.string()).describe('A list of relevant keywords for the business.'),
  topics: z.array(z.string()).describe('A list of content topics to attract the target audience.'),
});
export type GenerateSeoKeywordsAndTopicsOutput = z.infer<typeof GenerateSeoKeywordsAndTopicsOutputSchema>;

export async function generateSeoKeywordsAndTopics(
  input: GenerateSeoKeywordsAndTopicsInput
): Promise<GenerateSeoKeywordsAndTopicsOutput> {
  return generateSeoKeywordsAndTopicsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoKeywordsAndTopicsPrompt',
  input: {schema: GenerateSeoKeywordsAndTopicsInputSchema},
  output: {schema: GenerateSeoKeywordsAndTopicsOutputSchema},
  prompt: `Eres un consultor experto en SEO y marketing de contenidos. Un usuario proporcionará una descripción de su negocio y tú responderás con una lista de palabras clave y temas de contenido en español, optimizados para atraer a su público objetivo.

Descripción del Negocio: {{{$input}}}

Palabras Clave: Una lista de palabras clave relevantes para el negocio.
Temas: Una lista de temas de contenido diseñados para atraer al público objetivo.

Responde ÚNICAMENTE con el JSON. No se necesita ninguna explicación.
`,
});

const generateSeoKeywordsAndTopicsFlow = ai.defineFlow(
  {
    name: 'generateSeoKeywordsAndTopicsFlow',
    inputSchema: GenerateSeoKeywordsAndTopicsInputSchema,
    outputSchema: GenerateSeoKeywordsAndTopicsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
