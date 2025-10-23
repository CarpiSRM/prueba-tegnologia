
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { generateSeoAction } from '@/app/actions';
import { Loader2, Lightbulb, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  errors: null,
  data: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Lightbulb className="mr-2 h-4 w-4" />}
      Generar Ideas
    </Button>
  );
}

export default function SeoTool() {
  const [state, formAction] = useActionState(generateSeoAction, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.errors) {
      toast({
        variant: "destructive",
        title: "Error de validación",
        description: state.errors?.businessDescription?.[0] || 'Por favor revisa el formulario.',
      });
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-md shadow-2xl bg-card text-card-foreground backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Impulsa tu SEO con IA
        </CardTitle>
        <CardDescription className='text-muted-foreground'>
          ¿No sabes sobre qué escribir? Describe tu negocio y nuestra IA te dará palabras clave y temas de contenido.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <Textarea
            name="businessDescription"
            placeholder="Ej: Vendo muebles de madera artesanales en Asunción, enfocados en un diseño moderno y minimalista..."
            className="min-h-[100px] bg-input text-foreground"
            aria-label="Descripción del negocio"
          />
          <SubmitButton />
        </form>

        {state.data && (
          <div className="mt-6 space-y-4 animate-in fade-in duration-500">
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Palabras Clave (Keywords)
              </h4>
              <div className="flex flex-wrap gap-2">
                {state.data.keywords.map((keyword: string) => (
                  <Badge key={keyword} variant="secondary" className="bg-primary/10 text-primary-foreground border-primary/20">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Temas de Contenido
              </h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {state.data.topics.map((topic: string) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
