# Instalacion de proyecto REACT + VITE

### 1. Instalar el proyecto con vite

`npm create vite`

> Intalar vite de manera global `npm install vite -g` <----- EXTRA

### 2. Ponerle un nombre al proyecto

_*Proyecto-react-vite*_

### 3. Seleccionar la opcion de **_React_**

### 4. Seleccionar la opcion de **_Javascript_**

### 5. Cambiar de directorio

`cd proyecto-react-vite`

### 6. Instalacion de dependencias

`npm install` = `npm i`

### 7. Levantar el servidor

`npm run dev`

## Limpieza del proyecto

Borrar archivo `App.css`, `vite.svg` y `react.svg`

Dentro de _App.jsx_ solo se dejan las llaves sin nombre _<> </>_, se borra el _useState_ y tambien se borran todos los _imports_

Su archivo _App.jsx_ deberia quedar de la siguiente forma:

```jsx
import React from "react";

function App() {
  return <></>;
}

export default App;
```

Dentro de index.css pueden borrar todo o dejar solo el root

## Creando un nuevo componente

- Siempre el nombre del archivo va la primera con Mayuscula y luego .jsx

---

# Instalacion de proyecto REACT

### 1. Inicializar un proyecto con raect

`npx create-react-app proyecto-react`

### 2. Cambia de directorio

`cd Proyecto-react-vite`

### 3. Instalar las dependencias

`npm i`

### 4. Abrir VS CODE

`code .`s

### 5. Levantar el servidor

`npm start`

---

# TEORIA

### 🌟 ¿Qué es React?

React es una **biblioteca de JavaScript** que se usa para crear **interfaces de usuario interactivas y dinámicas**. Fue creada por Facebook y es muy popular porque permite construir aplicaciones web modernas de manera eficiente.

### 🎯 ¿Para qué sirve React?

React ayuda a construir **componentes reutilizables**, es decir, pequeñas piezas de código que representan partes de una página web (botones, formularios, menús, etc.). Estos componentes se actualizan automáticamente cuando los datos cambian, lo que hace que las aplicaciones sean más rápidas y fáciles de mantener.

### 🔥 Principales características de React

- **Componentes**: Se divide la interfaz en piezas reutilizables.
- **Virtual DOM**: React actualiza solo lo necesario en la página, haciendo que la web sea más rápida.
- **React Hooks**: Como `useState` y `useEffect` para manejar estados y efectos en los componentes.

---

### ⚡ ¿Qué es Vite y por qué usarlo con React?

Vite es un **entorno de desarrollo ultrarrápido** para proyectos de JavaScript, incluyendo React. Se usa en lugar de herramientas más lentas como Create React App (CRA).

### 🚀 ¿Para qué sirve Vite?

- **Carga más rápida**: Vite usa una técnica llamada "ES Modules" que permite iniciar el proyecto en milisegundos.
- **Hot Module Replacement (HMR)**: Los cambios en el código se actualizan instantáneamente sin recargar la página.
- **Optimización automática**: Cuando se construye la app para producción, Vite genera un código más eficiente y optimizado.

