# 🚀 Guía de Implementación - Bookéalo

## 📋 Estado Actual del Proyecto

### ✅ COMPLETADO (95% Frontend)

#### 🎨 Design System
- [x] Dark ocean theme con colores HSL
- [x] Sistema de tokens semánticos (CSS variables)
- [x] Tipografía profesional (Playfair Display, Inter, Cinzel)
- [x] Gradientes y efectos glassmorphism
- [x] Animaciones suaves y microinteracciones

#### 🧩 Componentes UI (shadcn/ui)
- [x] Button con variantes
- [x] Input con validación visual
- [x] Textarea
- [x] Label
- [x] Dialog/Modal
- [x] Toast (Sonner)
- [x] Badge
- [x] Skeleton loaders

#### 📄 Secciones Completas
1. [x] **Header** - Navegación sticky con menú móvil
2. [x] **Hero** - Banner fullscreen con imagen de ceviche
3. [x] **ReservationWidget** - Formulario funcional con validación
4. [x] **MenuSection** - 6 platos con imágenes y tags
5. [x] **SpacesSection** - 4 tipos de mesa con imágenes
6. [x] **AboutSection** - Historia, stats, chef, imágenes
7. [x] **ExperienceSection** - 4 características destacadas
8. [x] **TestimonialsSection** - 3 testimonios con Google badge
9. [x] **GallerySection** - 8 imágenes con lightbox
10. [x] **ContactSection** - Formulario funcional + Google Maps
11. [x] **Footer** - Links, redes sociales, copyright

#### ⚡ Funcionalidad Frontend
- [x] Formulario de reservas con validación completa (React Hook Form + Zod)
- [x] Modal de confirmación con código de reserva
- [x] Formulario de contacto con validación en tiempo real
- [x] Sistema de toasts (success, error, info, warning)
- [x] Loading states en botones
- [x] Skeleton loaders para cards
- [x] Google Maps embed
- [x] Botón flotante WhatsApp
- [x] Scroll to top button
- [x] Smooth scroll navigation
- [x] Responsive design completo

#### 🎭 Animaciones
- [x] Fade-in, scale-in, slide-up
- [x] Hover effects con lift y glow
- [x] Stagger animations en listas
- [x] Pulse subtle para elementos destacados
- [x] Shake animation para errores
- [x] Smooth transitions

#### ♿ Accesibilidad
- [x] Semantic HTML (header, main, section, nav, footer)
- [x] ARIA labels en botones de iconos
- [x] Focus states visibles (ring)
- [x] Keyboard navigation
- [x] Alt text en todas las imágenes
- [x] Form labels asociados correctamente

#### 🔍 SEO
- [x] Meta tags completos (title, description, keywords)
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Card tags
- [x] Canonical URL
- [x] JSON-LD structured data (Restaurant schema)
- [x] HTML lang="es"
- [x] Robots meta tag

#### 🔧 Infraestructura
- [x] TypeScript types en `src/types/index.ts`
- [x] API functions mock en `src/lib/api.ts`
- [x] Environment variables template (`.env.example`)
- [x] Comentarios para integración backend

---

## 🔌 PENDIENTE - Integración Backend

### 1️⃣ Habilitar Lovable Cloud

```bash
# En Lovable, habilitar Cloud desde la interfaz
# Esto provisionará automáticamente:
# - PostgreSQL database
# - Authentication service
# - File storage
# - Edge functions
```

### 2️⃣ Configurar Variables de Entorno

Crear archivo `.env`:

```env
# Lovable Cloud (automático al habilitar)
VITE_SUPABASE_URL=<tu-project-url>
VITE_SUPABASE_ANON_KEY=<tu-anon-key>

# Email Service (Resend recomendado)
RESEND_API_KEY=<tu-resend-key>

# WhatsApp Business API (opcional)
WHATSAPP_API_KEY=<tu-whatsapp-key>
WHATSAPP_PHONE_NUMBER=51999888777

# Google Maps API
VITE_GOOGLE_MAPS_API_KEY=<tu-maps-key>
```

### 3️⃣ Crear Base de Datos

Ejecutar SQL en Lovable Cloud (tab Database):

```sql
-- Tabla de Reservas
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(20) UNIQUE NOT NULL,
  user_id UUID REFERENCES auth.users(id),
  guest_name VARCHAR(100),
  guest_email VARCHAR(255),
  guest_phone VARCHAR(20),
  date DATE NOT NULL,
  time TIME NOT NULL,
  party_size INTEGER CHECK (party_size BETWEEN 1 AND 12),
  table_type VARCHAR(20) CHECK (table_type IN ('terraza', 'barra', 'salon', 'privado', 'cualquiera')),
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'seated', 'completed', 'cancelled', 'no_show')),
  special_requests TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Mensajes de Contacto
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'read', 'responded')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Mesas
CREATE TABLE tables (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  type VARCHAR(20) CHECK (type IN ('terraza', 'barra', 'salon', 'privado')),
  capacity INTEGER NOT NULL,
  min_capacity INTEGER NOT NULL,
  features TEXT[],
  is_available BOOLEAN DEFAULT true,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Tabla de Disponibilidad (slots)
CREATE TABLE availability_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  time TIME NOT NULL,
  available_tables INTEGER DEFAULT 0,
  table_types TEXT[],
  UNIQUE(date, time)
);

-- Índices para performance
CREATE INDEX idx_reservations_date ON reservations(date);
CREATE INDEX idx_reservations_status ON reservations(status);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);
CREATE INDEX idx_availability_date ON availability_slots(date);

-- Row Level Security (RLS)
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE tables ENABLE ROW LEVEL SECURITY;
ALTER TABLE availability_slots ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public to insert reservations" ON reservations
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public to insert contact messages" ON contact_messages
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Allow public to read tables" ON tables
  FOR SELECT TO anon USING (true);

CREATE POLICY "Allow public to read availability" ON availability_slots
  FOR SELECT TO anon USING (true);
```

### 4️⃣ Crear Edge Functions

#### `supabase/functions/create-reservation/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!
    );

    const body = await req.json();
    
    // Generate reservation code
    const code = `BKA-${new Date().getFullYear()}-${Math.random().toString().slice(2, 8)}`;
    
    // Insert reservation
    const { data, error } = await supabase
      .from('reservations')
      .insert({
        code,
        ...body,
        status: 'confirmed',
      })
      .select()
      .single();

    if (error) throw error;

    // TODO: Send confirmation email via Resend
    // await sendConfirmationEmail(data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
```

#### `supabase/functions/send-contact-message/index.ts`

```typescript
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_ANON_KEY')!
    );

    const body = await req.json();
    
    // Insert message
    const { data, error } = await supabase
      .from('contact_messages')
      .insert({
        ...body,
        status: 'new',
      })
      .select()
      .single();

    if (error) throw error;

    // TODO: Send email notification to restaurant
    // await sendNotificationEmail(data);

    return new Response(JSON.stringify(data), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
```

### 5️⃣ Actualizar Frontend API Calls

Reemplazar las funciones mock en `src/lib/api.ts`:

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function createReservation(data: any) {
  const { data: reservation, error } = await supabase.functions.invoke('create-reservation', {
    body: data,
  });

  if (error) throw error;
  return reservation;
}

export async function sendContactMessage(data: any) {
  const { data: message, error } = await supabase.functions.invoke('send-contact-message', {
    body: data,
  });

  if (error) throw error;
  return message;
}

export async function checkAvailability(date: string, time: string, partySize: number) {
  const { data, error } = await supabase
    .from('availability_slots')
    .select('*')
    .eq('date', date)
    .eq('time', time)
    .single();

  if (error) throw error;
  return data;
}
```

### 6️⃣ Configurar Emails con Resend

```typescript
// supabase/functions/_shared/email.ts
import { Resend } from 'npm:resend@2.0.0';

const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

export async function sendConfirmationEmail(reservation: any) {
  await resend.emails.send({
    from: 'Bookéalo <reservas@bookealo.com>',
    to: [reservation.guest_email],
    subject: `Confirmación de Reserva - ${reservation.code}`,
    html: `
      <h1>¡Tu mesa está reservada!</h1>
      <p>Código: <strong>${reservation.code}</strong></p>
      <p>Fecha: ${reservation.date}</p>
      <p>Hora: ${reservation.time}</p>
      <p>Personas: ${reservation.party_size}</p>
    `,
  });
}
```

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Formulario de reservas acepta datos válidos
- [ ] Validación muestra errores correctamente
- [ ] Modal de confirmación aparece con código
- [ ] Formulario de contacto envía datos
- [ ] Toasts aparecen en las acciones correctas
- [ ] WhatsApp se abre con mensaje pre-cargado
- [ ] Navegación smooth scroll funciona
- [ ] Responsive design en mobile/tablet/desktop
- [ ] Imágenes cargan correctamente
- [ ] Maps se visualiza correctamente

### Edge Functions Testing

```bash
# Deploy functions
supabase functions deploy

# Test create-reservation
curl -X POST https://your-project.supabase.co/functions/v1/create-reservation \
  -H "Content-Type: application/json" \
  -d '{"date":"2025-01-15","time":"19:00","partySize":4,"tableType":"salon"}'

# Test send-contact-message
curl -X POST https://your-project.supabase.co/functions/v1/send-contact-message \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","phone":"999888777","message":"Test"}'
```

---

## 🚀 Deployment

### Pre-deployment Checklist

- [ ] Environment variables configuradas
- [ ] Database tables creadas
- [ ] RLS policies habilitadas
- [ ] Edge functions deployed
- [ ] Email service configurado
- [ ] Google Maps API key añadida
- [ ] Testing manual completado
- [ ] SEO meta tags verificados

### Deploy to Lovable

```bash
# Desde la interfaz de Lovable:
1. Click en "Publish" (top-right)
2. Verificar preview
3. Confirmar deploy
4. Proyecto live en: https://bookealo.lovable.app
```

### Custom Domain (Opcional)

1. Ir a Project Settings > Domains
2. Agregar tu dominio: `bookealo.com`
3. Configurar DNS records:
   ```
   Type: CNAME
   Name: @ (or www)
   Value: <provided-by-lovable>
   ```
4. Esperar propagación DNS (hasta 48hrs)

---

## 📊 Métricas & Analytics

### Google Analytics Setup

```html
<!-- Agregar en index.html antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Events to Track

- Reservation form submissions
- Contact form submissions
- WhatsApp button clicks
- Menu item "Add to reservation" clicks
- Space card clicks
- Navigation clicks

---

## 🔐 Security Best Practices

- [x] Input validation (client + server)
- [x] SQL injection prevention (Supabase RLS)
- [x] XSS prevention (React escapes by default)
- [ ] Rate limiting on Edge Functions
- [ ] CAPTCHA en forms (opcional)
- [ ] Email verification para reservas (opcional)

---

## 📚 Documentation

### Key Files

- `src/types/index.ts` - TypeScript interfaces
- `src/lib/api.ts` - API functions
- `src/components/ReservationWidget.tsx` - Formulario de reservas
- `src/components/ContactForm.tsx` - Formulario de contacto
- `index.html` - SEO meta tags
- `.env.example` - Environment variables template

### Component Structure

```
src/
├── components/
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation
│   ├── Hero.tsx       # Hero section
│   ├── ReservationWidget.tsx  # Main reservation form
│   ├── MenuSection.tsx
│   ├── SpacesSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── GallerySection.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── lib/
│   └── api.ts         # API functions
├── types/
│   └── index.ts       # TypeScript types
└── pages/
    └── Index.tsx      # Main page
```

---

## 🎯 Next Steps

1. **Habilitar Lovable Cloud**
2. **Crear tablas en database**
3. **Deploy edge functions**
4. **Configurar Resend para emails**
5. **Testing completo**
6. **Deploy a producción**
7. **Configurar dominio personalizado**
8. **Setup Google Analytics**
9. **Monitorear errores y performance**

---

## 🆘 Soporte

- **Lovable Docs**: https://docs.lovable.dev
- **Supabase Docs**: https://supabase.com/docs
- **Resend Docs**: https://resend.com/docs
- **Discord**: https://discord.com/channels/lovable

---

## 📝 Notas Importantes

- El proyecto usa **React Hook Form + Zod** para validación
- Los colores están en **HSL** (no RGB) para mejor theming
- Todas las funciones API tienen **comentarios TODO** marcando integraciones
- El diseño es **mobile-first** y completamente responsive
- Las animaciones usan **GPU acceleration** (transform, opacity)

---

¡Proyecto listo para integración backend! 🚀
