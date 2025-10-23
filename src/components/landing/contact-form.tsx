
'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { useToast } from '@/hooks/use-toast';
import { sendContactForm } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';
import { Label } from '@/components/ui/label';

const initialState = {
  message: '',
  errors: null,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Send className="mr-2 h-4 w-4" />}
      Enviar Mensaje
    </Button>
  );
}

export default function ContactForm({ selectedPlan }: { selectedPlan?: string }) {
  const [state, formAction] = useActionState(sendContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const defaultMessage = selectedPlan
    ? `Estoy interesado/a en el plan: ${selectedPlan}.`
    : '';

  useEffect(() => {
    if (state.success) {
      toast({
        title: '¡Mensaje Enviado!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message && state.errors) {
       const errorMessages = Object.values(state.errors).flat().join(' ');
       toast({
        variant: 'destructive',
        title: 'Error en el formulario',
        description: errorMessages || state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="bg-card border-border text-card-foreground">
      <CardHeader>
        <CardTitle>Hablemos de tu proyecto</CardTitle>
        <CardDescription className="text-muted-foreground">Completa el formulario y nos pondremos en contacto.</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-muted-foreground">Nombre</Label>
            <Input id="name" name="name" placeholder="Tu nombre" className="bg-input border-border text-foreground" />
            {state?.errors?.name && <p className="text-sm text-red-500">{state.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-muted-foreground">Email</Label>
            <Input id="email" name="email" type="email" placeholder="tu@email.com" className="bg-input border-border text-foreground" />
            {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email[0]}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-muted-foreground">Mensaje</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Cuéntanos sobre tu idea o negocio..." 
              className="min-h-[100px] bg-input border-border text-foreground" 
              defaultValue={defaultMessage}
            />
            {state?.errors?.message && <p className="text-sm text-red-500">{state.errors.message[0]}</p>}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  );
}
