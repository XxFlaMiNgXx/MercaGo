# ✅ Configuración Completa - MercaGo

## 🎯 ¿Qué se ha configurado?

### 1. ✅ Backend (Express + MongoDB)
- **Puerto**: 3000
- **CORS habilitado**: Permite peticiones desde el frontend
- **Rutas configuradas**: 
  - `/posts` - CRUD completo para publicaciones
  - `/stores` - CRUD completo para tiendas
  - `/products` - CRUD completo para productos
  - `/users` - CRUD completo para usuarios
  - Y más modelos (comments, likes, follows, notifications, promotions)

### 2. ✅ Frontend (JavaScript vanilla)
- **Puerto**: 5500
- **API conectada**: Llama al backend en localhost:3000
- **Vistas implementadas**:
  - 🏠 Home - Página de bienvenida
  - 📱 Feed - Red social con publicaciones
  - 🏪 Tiendas - Listado y registro de tiendas
  - 📦 Productos - Catálogo y registro de productos

### 3. ✅ Base de Datos
- **MongoDB**: Puerto 27020
- **Database**: redSocial_abarrotes
- **Docker Compose**: Configurado y listo para usar

### 4. ✅ Scripts NPM
```json
"scripts": {
  "start": "node Backend/src/index.js",          // Inicia backend (producción)
  "dev": "nodemon Backend/src/index.js",         // Inicia backend (desarrollo)
  "backend": "nodemon Backend/src/index.js",     // Alias para desarrollo
  "frontend": "cd Frontend && npx serve -p 5500" // Inicia servidor frontend
}
```

## 🔗 Flujo de Comunicación

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │  HTTP   │                 │ MongoDB │                 │
│   FRONTEND      │────────▶│    BACKEND      │────────▶│    DATABASE     │
│  localhost:5500 │  CORS   │  localhost:3000 │ Driver  │  localhost:27020│
│                 │◀────────│                 │◀────────│                 │
└─────────────────┘  JSON   └─────────────────┘  Docs   └─────────────────┘
    JavaScript                   Express                    MongoDB
    Fetch API                   Node.js                   redSocial_abarrotes
```

## 📂 Archivos Modificados/Creados

### Backend
- ✅ `Backend/src/index.js` - Añadido CORS
- ✅ `Backend/src/routes/index.routes.js` - Añadidas rutas `/posts`, `/stores`, `/products`
- ✅ `Backend/src/database.js` - Corregido puerto MongoDB (27020)
- ✅ `Backend/package.json` - Añadida dependencia `cors`

### Frontend
- ✅ `Frontend/src/api.js` - Creadas funciones `apiPosts`, `apiStores`, `apiProducts`

### Raíz del proyecto
- ✅ `package.json` - Añadidos scripts `frontend` y `backend`
- ✅ `README.md` - Documentación completa
- ✅ `INICIO-RAPIDO.md` - Guía rápida de inicio
- ✅ `iniciar-proyecto.bat` - Script automático para Windows
- ✅ `CONFIGURACION-COMPLETA.md` - Este archivo

## 🚀 Cómo Iniciar (Resumen)

### Primera vez:
```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar MongoDB
cd Backend
docker-compose up -d
cd ..

# 3. Iniciar backend (Terminal 1)
npm run backend

# 4. Iniciar frontend (Terminal 2)
npm run frontend

# 5. Abrir navegador
# http://localhost:5500
```

### Siguientes veces:
```bash
# Opción rápida (Windows)
.\iniciar-proyecto.bat

# O manualmente:
npm run backend    # Terminal 1
npm run frontend   # Terminal 2
```

## 🧪 Prueba Rápida

1. Abre http://localhost:5500
2. Haz clic en "Red social"
3. Rellena el formulario:
   - Nombre: "Juan"
   - Título: "Mi primera publicación"
   - Contenido: "¡Hola MercaGo!"
4. Haz clic en "Publicar"
5. Deberías ver tu publicación en el feed 🎉

## 📊 Endpoints Disponibles

### Posts (Publicaciones)
- `GET /posts` ✅
- `POST /posts` ✅
- `GET /posts/:id` ✅
- `PUT /posts/:id` ✅
- `DELETE /posts/:id` ✅

### Stores (Tiendas)
- `GET /stores` ✅
- `POST /stores` ✅
- `GET /stores/:id` ✅
- `PUT /stores/:id` ✅
- `DELETE /stores/:id` ✅

### Products (Productos)
- `GET /products` ✅
- `POST /products` ✅
- `GET /products/:id` ✅
- `PUT /products/:id` ✅
- `DELETE /products/:id` ✅

### Otros modelos disponibles
- Users, Comments, Likes, Follows, Notifications, Promotions

## 💡 Consejos

1. **Siempre inicia MongoDB primero** (docker-compose up -d)
2. **Luego el backend** (npm run backend)
3. **Finalmente el frontend** (npm run frontend)
4. **Usa Ctrl + F5** para recargar forzadamente el frontend
5. **Revisa la consola del navegador** para ver errores de JavaScript
6. **Revisa la terminal del backend** para ver errores de API

## 🎓 Estructura de Carpetas

```
MercaGo/
├── Backend/
│   ├── src/
│   │   ├── index.js              ← Servidor Express + CORS
│   │   ├── database.js           ← Conexión MongoDB (27020)
│   │   ├── routes/
│   │   │   └── index.routes.js   ← API endpoints
│   │   └── models/               ← Modelos Mongoose
│   ├── docker-compose.yml        ← MongoDB config
│   └── package.json
│
├── Frontend/
│   ├── index.html                ← Página principal
│   ├── src/
│   │   ├── main.js               ← Router y navegación
│   │   ├── api.js                ← Funciones API
│   │   ├── components/           ← Componentes reutilizables
│   │   └── views/                ← Vistas de la app
│   └── assets/
│       └── styles.css
│
├── package.json                  ← Scripts del proyecto
├── README.md                     ← Documentación completa
├── INICIO-RAPIDO.md              ← Guía rápida
├── CONFIGURACION-COMPLETA.md     ← Este archivo
└── iniciar-proyecto.bat          ← Script automático Windows
```

## ✨ ¡Todo listo!

Tu proyecto MercaGo está completamente configurado y listo para funcionar. 

**¿Siguiente paso?** Ejecuta `npm run backend` y `npm run frontend` y empieza a trabajar 🚀
