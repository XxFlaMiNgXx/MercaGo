@echo off
echo ========================================
echo   MercaGo - Iniciando proyecto
echo ========================================
echo.

echo [1/2] Iniciando Backend en puerto 3001...
start "MercaGo Backend" cmd /k "npm run backend"
timeout /t 3 >nul
echo.

echo [2/2] Iniciando Frontend en puerto 5500...
start "MercaGo Frontend" cmd /k "npm run frontend"
echo.

echo ========================================
echo   Proyecto iniciado correctamente!
echo ========================================
echo.
echo Backend:  http://localhost:3001
echo Frontend: http://localhost:5500
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
