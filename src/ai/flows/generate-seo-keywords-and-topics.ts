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
  prompt: `You are an expert SEO and content marketing consultant. A user will provide a description of their business, and you will respond with a list of keywords and content topics optimized to attract their target audience.

Business Description: {{{$input}}}

Keywords: A list of relevant keywords for the business.
Topics: A list of content topics designed to attract the target audience.

Output ONLY the JSON. No explanation needed.
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
