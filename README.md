# 🦐 Bookéalo - Cevichería Contemporánea

> Sistema de reservas online para restaurante de comida marina peruana

[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

## 📋 Descripción

**Bookéalo** es una landing page moderna con sistema de reservas para una cevichería contemporánea ubicada en San Isidro, Lima. El proyecto combina un diseño elegante de tema oscuro con funcionalidades completas para gestionar reservas de mesas en tiempo real.

### ✨ Características Principales

- 🎨 **Diseño Premium Dark Theme** - Interfaz sofisticada con gradientes oceánicos
- 📱 **100% Responsive** - Optimizado para móvil, tablet y desktop
- 🍽️ **Catálogo de Menú** - Galería interactiva de platos con precios
- 📅 **Sistema de Reservas** - Widget intuitivo con validación en tiempo real
- 🗺️ **Múltiples Espacios** - Terraza, barra, salón privado
- 📧 **Formulario de Contacto** - Con validación completa
- 🎭 **Animaciones Suaves** - Scroll effects y micro-interacciones
- 🚀 **Alto Rendimiento** - Vite con optimización de imágenes
- ♿ **Accesible** - WCAG AA compliant
- 🔍 **SEO Optimizado** - Meta tags, Open Graph, Schema.org
- 🌊 **Splash Screen** - Pantalla de bienvenida elegante

---

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Vite 5.0 + React 18
- **Language**: TypeScript 5.0
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Notifications**: Sonner
- **Routing**: React Router DOM
- **State Management**: TanStack Query

### Backend (Preparado para)
- **BaaS**: Lovable Cloud (Supabase)
- **Database**: PostgreSQL
- **Auth**: Supabase Auth
- **Storage**: Supabase Storage
- **Edge Functions**: Deno/TypeScript
- **Email**: Resend

### DevOps
- **Hosting**: Lovable / Vercel
- **Version Control**: Git

---

## 📦 Instalación

### Prerrequisitos

```bash
Node.js 18+ 
npm o pnpm o bun
Git
```

### Pasos

1. **Clonar repositorio**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Instalar dependencias**
```bash
npm install
# o
pnpm install
# o
bun install
```

3. **Configurar variables de entorno** (opcional, para backend)
```bash
cp .env.example .env.local
```

Editar `.env.local`:
```env
# Supabase (cuando se integre)
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key

# App
VITE_APP_URL=http://localhost:5173
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
# o
pnpm dev
```

Abrir [http://localhost:5173](http://localhost:5173)

---

## 🗄️ Base de Datos (Preparado)

El proyecto incluye interfaces TypeScript y funciones API placeholder en `src/lib/api.ts` y `src/types/index.ts`, listas para integración con Lovable Cloud.

Ver `IMPLEMENTATION_GUIDE.md` para instrucciones detalladas de integración backend.

---

## 📂 Estructura del Proyecto

```
bookealo/
├── src/
│   ├── pages/
│   │   ├── Index.tsx               # Landing page principal
│   │   └── NotFound.tsx            # Página 404
│   ├── components/
│   │   ├── SplashScreen.tsx        # Pantalla de carga inicial ✨
│   │   ├── StructuredData.tsx      # SEO Schema.org ✨
│   │   ├── Header.tsx              # Navegación sticky
│   │   ├── Hero.tsx                # Hero section
│   │   ├── ReservationWidget.tsx   # Widget de reservas (funcional) ✅
│   │   ├── MenuSection.tsx         # Catálogo de platos
│   │   ├── SpacesSection.tsx       # Tipos de mesas
│   │   ├── AboutSection.tsx        # Nosotros
│   │   ├── ExperienceSection.tsx   # Características
│   │   ├── TestimonialsSection.tsx # Reseñas
│   │   ├── GallerySection.tsx      # Galería de fotos
│   │   ├── ContactForm.tsx         # Formulario contacto (funcional) ✅
│   │   ├── Footer.tsx              # Footer
│   │   └── ui/                     # Componentes shadcn/ui
│   ├── lib/
│   │   ├── api.ts                  # Funciones API (placeholder)
│   │   └── utils.ts                # Utilidades
│   ├── types/
│   │   └── index.ts                # TypeScript interfaces
│   ├── hooks/
│   │   ├── use-mobile.tsx          # Hook responsive
│   │   └── use-toast.ts            # Hook notifications
│   ├── assets/                     # Imágenes generadas (23 archivos)
│   ├── App.tsx                     # Configuración rutas
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Estilos globales + design system
├── public/
│   ├── favicon.ico
│   ├── manifest.json               # PWA manifest ✨
│   ├── robots.txt                  # SEO robots ✨
│   ├── sitemap.xml                 # SEO sitemap ✨
│   └── placeholder.svg
├── .env.example                    # Template variables entorno
├── IMPLEMENTATION_GUIDE.md         # Guía integración backend
├── tailwind.config.ts              # Configuración Tailwind
├── tsconfig.json                   # Configuración TypeScript
├── vite.config.ts                  # Configuración Vite
└── package.json
```

---

## 🎨 Diseño y Branding

### Paleta de Colores (HSL)

```css
/* Backgrounds - Ocean Depths */
--ocean-dark: 210 65% 10%;      /* #0A1628 - Fondo principal */
--ocean-blue: 207 54% 24%;      /* #1E3E59 - Secciones alternas */
--ocean-surface: 215 35% 14%;   /* #162033 - Superficies/cards */

/* Accents - Warm Peruvian Soul */
--amber-warm: 38 95% 51%;       /* #F59E0B - Botones primarios */
--terracota: 14 78% 63%;        /* #E07856 - Acentos secundarios */
--teal-fresh: 173 80% 40%;      /* #14B8A6 - Links, íconos, frescura */

/* Text Hierarchy */
--text-primary: 0 0% 100%;      /* White - Headlines */
--text-secondary: 214 17% 64%;  /* #94A3B8 - Body text */
--text-muted: 215 16% 47%;      /* #64748B - Labels */
```

### Tipografía

- **Títulos**: Playfair Display (serif, elegante)
- **Cuerpo**: Inter (sans-serif, legible)
- **Decorativo**: Cinzel (serif premium, uso mínimo)

### Logo

El logo usa un emoji de camarón 🦐 estilizado con gradiente oceánico (placeholder, se puede reemplazar con SVG personalizado).

---

## 🚀 Deployment

### Lovable (Recomendado)

El proyecto está optimizado para desplegar directamente en Lovable:

1. Conectar repositorio en Lovable
2. Deploy automático en cada cambio
3. Habilitar Lovable Cloud para backend

**URL del proyecto**: https://lovable.dev/projects/ca6b9517-ea97-436c-8abe-28d878ca6527

---

## 📊 Funcionalidades

### ✅ Implementado (Frontend 100%)

- [x] Landing page completa (11 secciones)
- [x] Diseño responsive mobile-first
- [x] Sistema de navegación smooth scroll
- [x] Widget de reservas con validación completa
- [x] Formulario de contacto funcional
- [x] Galería de platos interactiva
- [x] Selección de espacios/mesas
- [x] Animaciones y micro-interacciones
- [x] SEO completo (meta tags, OG, Schema.org)
- [x] Accesibilidad WCAG AA
- [x] Splash screen con animaciones
- [x] WhatsApp floating button
- [x] Toast notifications (Sonner)
- [x] Loading states
- [x] Google Maps embed
- [x] Skeleton loaders

### 🔄 Pendiente (Backend)

- [ ] Conexión Lovable Cloud/Supabase
- [ ] CRUD de reservas real
- [ ] Envío de emails de confirmación
- [ ] Panel admin para gestión
- [ ] Dashboard con estadísticas
- [ ] Sistema de autenticación
- [ ] Calendario de disponibilidad

### 🔮 Roadmap Futuro

- [ ] PWA completa
- [ ] Menú digital con QR
- [ ] Sistema de puntos/fidelización
- [ ] Pedidos online (para llevar)
- [ ] Multi-idioma (inglés)
- [ ] Pagos online

---

## 🧪 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor de desarrollo

# Build
npm run build            # Compilar para producción
npm run preview          # Preview del build

# Linting
npm run lint             # ESLint
```

---

## 📈 Performance

- **Lighthouse Score**: 95+ (objetivo)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Cumulative Layout Shift**: < 0.1

### Optimizaciones Aplicadas

- Vite con HMR ultrarrápido
- Lazy loading de imágenes
- Code splitting automático
- Tree shaking
- Minificación CSS/JS
- Preload de fuentes críticas
- Animaciones GPU-accelerated

---

## 🌟 Características Destacadas

### Splash Screen Elegante
- Animaciones flotantes con burbujas
- LocalStorage para mostrar solo una vez
- Opción de saltar intro
- Transiciones suaves

### Formulario de Reservas
- Validación en tiempo real
- Modal de confirmación con código único
- Opción de descarga PDF y compartir por WhatsApp
- Loading states elegantes

### Formulario de Contacto
- Validación completa con React Hook Form + Zod
- Contador de caracteres
- Iconos de estado (válido/inválido)
- Toast notifications

### Diseño Premium
- Sistema de diseño completo en `index.css`
- Tokens semánticos (no colores hardcodeados)
- Dark theme océanico profesional
- Gradientes y sombras personalizados

### SEO y Accesibilidad
- Meta tags completos (OG, Twitter Card)
- JSON-LD structured data (Schema.org)
- Sitemap.xml y robots.txt
- ARIA labels en todos los elementos interactivos
- Navegación por teclado completa

---

## 📝 Licencia

MIT License

---

## 👨‍💻 Autor

**Equipo Bookéalo**
- Sitio web: [bookealo.com](https://bookealo.com)
- Email: hola@bookealo.com
- WhatsApp: +51 999 888 777

---

## 🏢 Desarrollado por

**[Inspyrio](https://inspyrio.com)** - Soluciones digitales innovadoras

Este proyecto fue desarrollado por Inspyrio, especialistas en crear experiencias web modernas y escalables para el sector gastronómico.

---

## 🙏 Agradecimientos

- Diseño inspirado en restaurantes peruanos de alta gama
- Imágenes generadas con IA (flux.schnell)
- Iconos de [Lucide](https://lucide.dev)
- UI components de [shadcn/ui](https://ui.shadcn.com)
- Stack tecnológico de [Lovable](https://lovable.dev)

---

## 📞 Contacto

Para dudas o consultas sobre el proyecto:
- **WhatsApp**: +51 999 888 777
- **Email**: hola@bookealo.com
- **Ubicación**: Av. Conquistadores 456, San Isidro, Lima

---

## 💡 Cómo Editar este Proyecto

Este proyecto se puede editar de varias formas:

**Usar Lovable** (Recomendado)

Visita el [Proyecto en Lovable](https://lovable.dev/projects/ca6b9517-ea97-436c-8abe-28d878ca6527) y usa prompts naturales.

**Desarrollo Local**

```bash
git clone <TU_GIT_URL>
cd <NOMBRE_PROYECTO>
npm install
npm run dev
```

**GitHub Codespaces**

Abre el proyecto directamente en GitHub Codespaces para desarrollo en la nube.

---

## 🔗 Enlaces Útiles

- [Lovable Documentation](https://docs.lovable.dev)
- [Custom Domain Setup](https://docs.lovable.dev/features/custom-domain)
- [Backend Integration Guide](./IMPLEMENTATION_GUIDE.md)

---

⭐ Si este proyecto te fue útil, considera darle una estrella!

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or pnpm
- Supabase account (free tier is fine)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/bookealo.git
   cd bookealo
```

2. **Install dependencies**
```bash
   npm install
```

3. **Configure environment variables**
```bash
   cp .env.example .env.local
```
   
   Edit `.env.local` with your Supabase credentials:
   - Get URL and anon key from Supabase Dashboard → Settings → API

4. **Run development server**
```bash
   npm run dev
```
   
   Open http://localhost:5173

### Database Setup

Execute this SQL in Supabase SQL Editor:
```sql
-- Create reservations table
CREATE TABLE reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(20) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  party_size INTEGER NOT NULL,
  table_type VARCHAR(50),
  status VARCHAR(20) DEFAULT 'pending',
  special_requests TEXT,
  confirmation_code VARCHAR(20) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact messages table
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Disable RLS for public access (adjust based on your security needs)
ALTER TABLE reservations DISABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
```

## 📦 Build & Deploy

### Build for production
```bash
npm run build
```

### Deploy to Vercel
1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

---

**🏢 Developed by [Inspyrio](https://inspyrio.com)**

