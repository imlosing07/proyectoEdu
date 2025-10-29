# proyectoEdu — Frontend

Aplicación frontend para la plataforma proyectoEdu, construida con Next.js (App Router), TypeScript y Tailwind CSS.
Su propósito es facilitar el aprendizaje mediante cuentos pictográficos y actividades guiadas tanto para estudiantes como para adultos/docentes.

## Características Principales

- Flujos independientes para estudiantes y adultos
- Interfaz visual amigable y accesible
- Compatibilidad con lectura en voz alta (Text-to-Speech)
- Componentes reutilizables y escalables
- Basado en estándares modernos (Next.js + React 19 + TypeScript)

## Tecnologías

| Tecnología | Uso |
|-----------|-----|
| Next.js 16 (App Router) | Estructura del frontend |
| React 19 | Motor UI |
| TypeScript | Tipado seguro |
| Tailwind CSS | Estilos |
| LocalStorage | Persistencia simple en el navegador |

## Requisitos Previos

- Node.js 18+
- Uno de los siguientes gestores de paquetes:
  - npm
  - pnpm
  - yarn

## Instalación

```
cd d:\proyectoEdurontend
npm install
```

Con pnpm:

```
pnpm install
```

Con yarn:

```
yarn
```

## Modo Desarrollo

```
npm run dev
```

Abrir en el navegador:
http://localhost:3000

## Compilar para Producción

```
npm run build
npm run start
```

## Scripts Disponibles

| Script  | Acción |
|--------|--------|
| dev    | Inicia el servidor de desarrollo |
| build  | Genera el build de producción |
| start  | Ejecuta la aplicación en producción |
| lint   | Ejecuta análisis de código |

## Estructura del Proyecto

```
app/
  student/
    age-input/page.tsx        # Ingreso de edad del estudiante
    name-input/               # Flujo para capturar nombre
  adult/                      # Páginas para adultos/educadores

src/
  components/                 # Componentes UI reutilizables
  data/mockData.ts            # Datos de ejemplo
  lib/                        # Funciones utilitarias

public/
  images/                     # Recursos estáticos
```

## Variables de Entorno

Crear `.env.local` en la raíz del proyecto:

```
NEXT_PUBLIC_API_URL=https://tu-backend-api.com
NEXT_PUBLIC_APP_ENV=local
```

## Validación del Ingreso de Edad

El formulario:
- Acepta solo números
- Valida antes de guardar en localStorage
- Redirige al siguiente paso si es válido

Para modificar la validación: `app/student/age-input/page.tsx`

## Próximos Pasos Recomendados

- Agregar diseño responsivo para tablets
- Integrar Text-to-Speech
- Crear panel de progreso del estudiante
- Integrar backend si aplica

## Contribución

1. Crear rama (`feature/nombre`)
2. Hacer commits claros
3. Abrir Pull Request

## Licencia

Proyecto interno — Uso educativo
