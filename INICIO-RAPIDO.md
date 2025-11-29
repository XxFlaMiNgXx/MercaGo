# 🚀 Guía Rápida de Inicio - MercaGo

## ⚡ Inicio Rápido (3 pasos)

### 1. Instalar dependencias (solo la primera vez)
```bash
npm install
```

### 2. Iniciar MongoDB
Si usas Docker:
```bash
cd Backend
docker-compose up -d
cd ..
```

Si tienes MongoDB instalado localmente, asegúrate que esté corriendo en puerto 27020.

### 3. Iniciar el proyecto

**Opción A: Script automático (Windows)**
```bash
.\iniciar-proyecto.bat
```

**Opción B: Manual (2 terminales)**

Terminal 1 - Backend:
```bash
npm run backend
```

Terminal 2 - Frontend:
```bash
npm run frontend
```

## 🌐 URLs del Proyecto

- **Frontend**: http://localhost:5500
- **Backend API**: http://localhost:3000
- **MongoDB**: mongodb://localhost:27020

## ✅ Verificación

Para verificar que todo funciona:

1. Abre http://localhost:5500
2. Ve a la sección "Red Social"
3. Crea una publicación de prueba
4. Si aparece en el feed, ¡todo funciona! 🎉

## 🛑 Detener el Proyecto

- Cierra las ventanas de terminal o presiona `Ctrl + C` en cada una

Para detener MongoDB (si usas Docker):
```bash
cd Backend
docker-compose down
```

## 📝 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el backend (modo producción) |
| `npm run backend` | Inicia el backend con nodemon (desarrollo) |
| `npm run frontend` | Inicia el servidor del frontend |
| `npm run dev` | Alias de `npm run backend` |

## 🔧 Solución Rápida de Problemas

### Error: Cannot GET /
✅ Asegúrate de abrir http://localhost:5500 (no 3000)

### Error de conexión a MongoDB
✅ Ejecuta: `docker-compose up -d` en la carpeta Backend

### Error CORS
✅ El backend debe estar corriendo antes que el frontend

### Los cambios no se reflejan
✅ Recarga la página con Ctrl + F5 (recarga forzada)

## 📚 Más Información

Consulta el archivo `README.md` completo para:
- Estructura detallada del proyecto
- Lista completa de endpoints
- Tecnologías utilizadas
- Guía de contribución
