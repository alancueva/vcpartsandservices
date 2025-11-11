import DynamicImageGridSection from '@/components/section/DynamicImageGridSection';


const IMAGENES = [
    { src: "/productos/PRODUCTOS-ULTRASONIDO1.png", alt: "imagen 1" },
    { src: "/productos/PRODUCTOS-ULTRASONIDO2.png", alt: "imagen 2" }
];

const Description = [
    "La limpieza por ultrasonidos es el método más eficaz para lavar cualquier tipo de pieza industrial y aumentar su capacidad productiva. Este método de limpieza funciona mediante ondas longitudinales de alta frecuencia producidas en el líquido en el que se sumergen las piezas.",
    "La experiencia nos enseña que la limpieza ultrasónica acuosa es la mejor solución para eliminar la contaminación de las piezas lapeadas y pulidas porque la acción de los ultrasonidos “rebusca” incluso en geometrías complejas, y al mismo tiempo es lo suficientemente suave para no dañar la superficie plana lapeada o pulida.",
    "Hasta las superficies pulidas a espejo se pueden limpiar de este modo, sin degradar el acabado del pulido.",
    "Kemet cuenta con una gama completa de los equipos de limpieza por ultrasonido más avanzados con una nueva tecnología que garantiza mejores resultados de limpieza sea cual sea la condición dentro del baño.",
    // <p key="final" className="font-semibold text-gray-700">¡No hay reemplazos dudosos en cuanto a la calidad!

// </p>
];


export default function sistemaLimpieza() {

    return (
        <div className="font-sans space-y-20">

            <DynamicImageGridSection
                title="Sistemas de limpieza"
                highlightedWord="por ultrasonido"
                description={Description}
                images={IMAGENES}
            />
        </div>
    );
}