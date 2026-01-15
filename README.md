# VC Parts and Services

Este proyecto es una aplicación web desarrollada con **Next.js** para **VC Parts and Services**, una empresa especialista en lapeado y pulido de alta precisión.

El sitio web funciona como un catálogo digital para mostrar equipos de lapeado, kits portátiles y consumibles, destacando soluciones tecnológicas como las de KEMET.

## 🚀 Tecnologías Utilizadas

*   **[Next.js](https://nextjs.org/)**: Framework de React para la estructura y renderizado de la aplicación.
*   **[React](https://reactjs.org/)**: Librería principal para la construcción de interfaces de usuario.
*   **[TypeScript](https://www.typescriptlang.org/)**: Para un código más robusto y seguro mediante tipado estático.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Framework de utilidades CSS utilizado para el diseño responsivo y estilos corporativos (tonos vinotintos/rojos).

## 📂 Estructura del Proyecto

El proyecto utiliza la estructura de directorios moderna de Next.js (App Router):

*   `src/app`: Directorio principal de la aplicación.
    *   `src/app/pages/productos/equipos-de-lapeado`: Página de catálogo que muestra máquinas, kits y consumibles.

## 🛠️ Instalación y Ejecución

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Instala las dependencias**:
    ```bash
    npm install
    # o si usas yarn
    yarn install
    ```

2.  **Ejecuta el servidor de desarrollo**:
    ```bash
    npm run dev
    # o
    yarn dev
    ```

3.  **Visualiza la aplicación**:
    Abre http://localhost:3000 en tu navegador.

## ✨ Características Principales

*   **Catálogo de Productos**: Visualización organizada de equipos y consumibles mediante grillas (`ProductGrid`).
*   **Diseño Responsivo**: Adaptable a dispositivos móviles y escritorio gracias a Tailwind CSS.
*   **Optimización de Imágenes**: Uso del componente `Image` de Next.js para mejorar el rendimiento de carga.