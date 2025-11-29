# MercaGo - Red Social de Abarrotes

Proyecto académico que integra frontend (JavaScript) y backend (Node.js/Express/MongoDB).

## 📁 Estructura del Proyecto

```
MercaGo/
├── Backend/          # API REST con Express y MongoDB
│   └── src/
│       ├── index.js        # Servidor principal
│       ├── database.js     # Conexión a MongoDB
│       ├── models/         # Modelos de Mongoose
│       └── routes/         # Rutas de la API
│
└── Frontend/         # Interfaz web con JavaScript vanilla
    ├── index.html
    ├── assets/
    │   └── styles.css
    └── src/
        ├── main.js
        ├── api.js
        ├── components/
        └── views/
```

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos

1. **Node.js** (versión 16 o superior)
2. **MongoDB** corriendo en `localhost:27020`
3. **npm** instalado

### Paso 1: Instalar dependencias

Desde la raíz del proyecto:

```bash
npm install
```

### Paso 2: Iniciar MongoDB

Asegúrate de que MongoDB esté corriendo en el puerto `27020`. Si usas Docker:

```bash
cd Backend
docker-compose up -d
```

### Paso 3: Ejecutar el Backend

Opción 1 - Con nodemon (modo desarrollo, recarga automática):
```bash
npm run backend
```

Opción 2 - Modo normal:
```bash
npm start
```

El backend estará disponible en: `http://localhost:3000`

### Paso 4: Ejecutar el Frontend

Abre una **nueva terminal** y ejecuta:

```bash
npm run frontend
```

El frontend estará disponible en: `http://localhost:5500`

## 🔗 Endpoints de la API

### Posts
- `GET /posts` - Listar posts
- `POST /posts` - Crear post
- `GET /posts/:id` - Obtener post por ID
- `PUT /posts/:id` - Actualizar post
- `DELETE /posts/:id` - Eliminar post

### Tiendas
- `GET /stores` - Listar tiendas
- `POST /stores` - Crear tienda
- `GET /stores/:id` - Obtener tienda por ID
- `PUT /stores/:id` - Actualizar tienda
- `DELETE /stores/:id` - Eliminar tienda

### Productos
- `GET /products` - Listar productos
- `POST /products` - Crear producto
- `GET /products/:id` - Obtener producto por ID
- `PUT /products/:id` - Actualizar producto
- `DELETE /products/:id` - Eliminar producto

### Usuarios
- `GET /users/ls` - Listar usuarios
- `POST /users` - Crear usuario
- `GET /users/:id` - Obtener usuario por ID
- `PUT /users/:id` - Actualizar usuario
- `DELETE /users/:id` - Eliminar usuario

### Promociones, Comentarios, Likes, Follows, Notificaciones
Similar estructura CRUD disponible para cada modelo.

## 🛠️ Tecnologías utilizadas

### Backend
- **Express** - Framework web
- **Mongoose** - ODM para MongoDB
- **CORS** - Permitir peticiones desde el frontend
- **Nodemon** - Recarga automática en desarrollo

### Frontend
- **JavaScript ES6+** - Módulos nativos
- **HTML5** - Estructura semántica
- **CSS3** - Estilos personalizados
- **Fetch API** - Peticiones HTTP

## 📝 Notas importantes

- El backend debe estar corriendo antes de usar el frontend
- MongoDB debe estar en `localhost:27020` (puerto configurado en `database.js`)
- El frontend usa módulos ES6, por lo que necesita un servidor web (no abrir directamente el HTML)
- CORS está habilitado para permitir la comunicación entre frontend y backend

## 🐛 Solución de problemas

### Error de conexión a la API
- Verifica que el backend esté corriendo en `http://localhost:3000`
- Revisa que MongoDB esté activo en el puerto `27020`

### El frontend no carga
- Asegúrate de servir el frontend con `npm run frontend` o un servidor HTTP
- No abras `index.html` directamente en el navegador (los módulos ES6 requieren un servidor)

### Error CORS
- El backend ya tiene CORS habilitado
- Si persiste, verifica que estés accediendo desde `http://localhost:5500`

## 👥 Contribución

Este es un proyecto académico. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

ISC
