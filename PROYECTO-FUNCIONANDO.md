# 🎉 ¡MercaGo está FUNCIONANDO!

## ✅ Estado Actual del Proyecto

### Servidores Activos:
- ✅ **Backend**: http://localhost:3001 (Express + Node.js)
- ✅ **Frontend**: http://localhost:5500 (Python HTTP Server)
- ✅ **MongoDB**: localhost:27019 (Base de datos activa)

## 🚀 Cómo Iniciar el Proyecto

### Opción 1: Scripts Simples (Recomendado)

**Terminal 1 - Backend:**
```bash
npm run backend
```

**Terminal 2 - Frontend:**
```bash
npm run frontend
```

### Opción 2: Script Automático Windows

```bash
.\start-frontend.bat    # Inicia el frontend
npm run backend         # En otra terminal
```

## 🌐 URLs de Acceso

| Servicio | URL | Estado |
|----------|-----|--------|
| **Frontend (App)** | http://localhost:5500 | ✅ Activo |
| **Backend (API)** | http://localhost:3001 | ✅ Activo |
| **MongoDB** | mongodb://localhost:27019 | ✅ Conectado |

## 📱 Funcionalidades Disponibles

### 1. 🏠 Inicio
- Página de bienvenida
- Navegación a todas las secciones

### 2. 📱 Red Social
- ✅ Crear publicaciones
- ✅ Ver feed de publicaciones
- ✅ Formulario con autor, título y contenido

### 3. 🏪 Tiendas
- ✅ Registrar nuevas tiendas
- ✅ Ver listado de tiendas
- ✅ Datos: nombre, dirección, dueño

### 4. 📦 Productos
- ✅ Registrar productos
- ✅ Ver catálogo completo
- ✅ Datos: nombre, categoría, precio

## 🧪 Prueba Rápida

1. **Abre**: http://localhost:5500
2. **Haz clic en**: "Red social"
3. **Rellena el formulario**:
   - Nombre: "María"
   - Título: "Primera publicación"
   - Contenido: "¡Hola MercaGo!"
4. **Haz clic en**: "Publicar"
5. **Resultado**: Deberías ver tu publicación aparecer en el feed 🎉

## 🔗 Endpoints de la API (Backend)

Base URL: `http://localhost:3001`

### Posts
```
GET    /posts      - Listar publicaciones
POST   /posts      - Crear publicación
GET    /posts/:id  - Obtener por ID
PUT    /posts/:id  - Actualizar
DELETE /posts/:id  - Eliminar
```

### Stores
```
GET    /stores      - Listar tiendas
POST   /stores      - Crear tienda
GET    /stores/:id  - Obtener por ID
PUT    /stores/:id  - Actualizar
DELETE /stores/:id  - Eliminar
```

### Products
```
GET    /products      - Listar productos
POST   /products      - Crear producto
GET    /products/:id  - Obtener por ID
PUT    /products/:id  - Actualizar
DELETE /products/:id  - Eliminar
```

## 🛑 Detener el Proyecto

1. **Frontend**: Presiona `Ctrl + C` en la terminal del frontend
2. **Backend**: Presiona `Ctrl + C` en la terminal del backend
3. **MongoDB**: Si quieres detenerla: `docker stop abarrotes_db`

## 🔧 Cambios Realizados

### Backend
- ✅ Puerto cambiado a **3001** (3000 estaba ocupado)
- ✅ CORS habilitado
- ✅ Rutas `/posts`, `/stores`, `/products` añadidas
- ✅ Conectado a MongoDB en puerto 27019

### Frontend
- ✅ API actualizada a puerto **3001**
- ✅ Funciones `apiPosts`, `apiStores`, `apiProducts` implementadas
- ✅ Servidor HTTP con Python (sin dependencias extras)

### Scripts
- ✅ `npm run backend` - Inicia backend con nodemon
- ✅ `npm run frontend` - Inicia frontend con Python
- ✅ `start-frontend.bat` - Script alternativo para Windows

## 📊 Estructura de Comunicación

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   NAVEGADOR     │         │    BACKEND      │         │    MONGODB      │
│  localhost:5500 │────────▶│  localhost:3001 │────────▶│  localhost:27019│
│                 │  Fetch  │   Express API   │ Mongoose│   Base de Datos │
│   HTML/CSS/JS   │◀────────│   + CORS        │◀────────│  redSocial_...  │
└─────────────────┘  JSON   └─────────────────┘  Docs   └─────────────────┘
```

## 💡 Consejos de Uso

1. **Siempre inicia el backend antes del frontend**
2. **Recarga con Ctrl + F5** si no ves cambios
3. **Abre la consola del navegador** (F12) para ver errores
4. **Revisa la terminal del backend** para ver peticiones
5. **MongoDB ya está corriendo** (no necesitas iniciarla)

## 🐛 Solución de Problemas

### Error: Cannot GET /
✅ **Solución**: Asegúrate de acceder a `http://localhost:5500` (no 3001)

### Error: Failed to fetch
✅ **Solución**: Verifica que el backend esté corriendo en puerto 3001

### Los datos no aparecen
✅ **Solución**: 
1. Abre la consola del navegador (F12)
2. Revisa si hay errores
3. Verifica que MongoDB esté activo: `docker ps`

### Puerto 3001 ocupado
✅ **Solución**: Cambia el puerto en `Backend/src/index.js` línea:
```javascript
const PORT = process.env.PORT || 3002; // Cambia a otro puerto
```
Y actualiza `Frontend/src/api.js`:
```javascript
export const API_BASE_URL = "http://localhost:3002";
```

## 📁 Archivos Importantes

| Archivo | Descripción |
|---------|-------------|
| `Backend/src/index.js` | Servidor Express (Puerto 3001) |
| `Backend/src/database.js` | Conexión MongoDB (Puerto 27019) |
| `Backend/src/routes/index.routes.js` | Endpoints de la API |
| `Frontend/src/api.js` | Funciones para llamar al backend |
| `Frontend/src/main.js` | Router y navegación |
| `Frontend/index.html` | Página principal |
| `package.json` | Scripts npm del proyecto |

## 🎓 Próximos Pasos

1. **Prueba todas las vistas**: Inicio, Red Social, Tiendas, Productos
2. **Crea datos de prueba**: Añade tiendas, productos y publicaciones
3. **Explora la API**: Usa Postman o Thunder Client para probar endpoints
4. **Personaliza**: Modifica estilos en `Frontend/assets/styles.css`

## 🎉 ¡Todo Funcionando!

Tu proyecto MercaGo está completamente operativo:
- ✅ Backend corriendo
- ✅ Frontend accesible
- ✅ Base de datos conectada
- ✅ CRUD completo funcionando

**¡Ahora puedes empezar a usar y desarrollar tu aplicación!** 🚀
