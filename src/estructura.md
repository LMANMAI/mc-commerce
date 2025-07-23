src/
├── assets/ # Imágenes, fuentes, íconos, etc.
├── components/ # Componentes reutilizables (botones, cards, headers, etc.)
│ ├── ui/ # Componentes base estilizados (Button, Input, etc.)
│ └── layout/ # Componentes estructurales (Navbar, Footer, Sidebar, etc.)
├── features/ # Lógica de negocio agrupada por dominio (Redux + vistas)
│ ├── cart/ # Carrito de compras
│ │ ├── CartSlice.ts # Redux slice
│ │ ├── CartPage.tsx # Página del carrito
│ │ └── components/ # Componentes específicos del carrito
│ ├── products/ # Productos
│ │ ├── ProductSlice.ts # Redux slice
│ │ ├── ProductList.tsx
│ │ ├── ProductDetail.tsx
│ │ └── components/
│ ├── auth/ # Autenticación
│ ├── categories/ # Categorías y navegación
│ └── orders/ # Historial y detalles de pedidos
├── hooks/ # Custom hooks (ej. useCart, useAuth)
├── pages/ # Rutas principales (Home, Contacto, etc.)
│ ├── Home.tsx
│ ├── Contact.tsx
│ └── NotFound.tsx
├── routes/ # Definición de rutas (React Router o equivalente)
│ └── AppRouter.tsx
├── store/ # Configuración de Redux Toolkit
│ ├── store.ts
│ └── rootReducer.ts
├── theme/ # Configuración personalizada de Chakra UI (colores, fuentes, etc.)
│ └── index.ts
├── utils/ # Funciones utilitarias (formatPrice, validators, etc.)
├── types/ # Tipos y definiciones TypeScript
├── App.tsx # Componente raíz
├── main.tsx # Entry point
└── index.css
