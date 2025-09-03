# Café Cata Platform

Plataforma de cata de café multilenguaje (Español, Inglés, Portugués).

## Instrucciones de despliegue

### Frontend (Vercel)
1. Sube este proyecto a un repositorio en GitHub.
2. Entra a [Vercel](https://vercel.com), crea un nuevo proyecto desde tu repo.
3. Vercel detectará `Interfaz/package.json` y compilará con `vite build`.
4. Tras el deploy, tendrás tu app pública en la URL de Vercel.

### Backend (Render o Railway)
1. Entra a [Render](https://render.com) o [Railway](https://railway.app).
2. Crea un servicio Web → selecciona la carpeta `backend`.
3. Configura el start command: `uvicorn main:app --host 0.0.0.0 --port 8000`.
4. Una vez desplegado, obtendrás la URL pública del backend (ejemplo: https://cafe-api.onrender.com).

### Variables de entorno
En Vercel, agrega `VITE_API_URL` apuntando a la URL de tu backend.

---
¡Listo! Ahora podrás compartir y escalar la plataforma de cata de café.
