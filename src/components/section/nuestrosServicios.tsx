

import Image from 'next/image';

export default function NuestroServicios() {
    return (
        <section className="bg-slate-50 py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <div className="text-center gap-4 mb-16">
                        {/* <div className="h-1 w-16 bg-blue-900"></div> */}
                        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-4">
                            Nuestros <span className="font-semibold text-blue-900">Servicios</span>
                        </h2>
                        <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    <div className="bg-white border-t-4 border-blue-900 p-10 rounded-lg shadow-md transition-all duration-300 ease-in-out 
                                    hover:scale-105 hover:shadow-xl 
                                    cursor-pointer overflow-hidden">
                        <h3 className="text-3xl font-semibold text-slate-900 text-center mb-8 italic">Productos</h3>
                        <div className="flex justify-center mb-8">
                            <Image
                                src={'/INDEX-PRODUCTOS.jpg'}
                                alt='productos'
                                width={500}
                                height={500}
                                // className="h-100 w-auto rounded-4xl"
                                className="h-auto w-full max-w-md rounded-2xl"
                            />
                        </div>

                    </div>


                    <div className="bg-white border-t-4 border-blue-900 p-10 rounded-lg shadow-md transition-all duration-300 ease-in-out 
                                    hover:scale-105 hover:shadow-xl 
                                    cursor-pointer overflow-hidden">
                        <h3 className="text-3xl font-semibold text-slate-900 text-center mb-8 italic">Servicios</h3>
                        <div className="flex justify-center mb-8">
                            <Image
                                src={'/INDEX-SERVICIOS.jpg'}
                                alt='Servicios'
                                width={500}
                                height={500}
                                // className='h-100 w-auto rounded-4xl '
                                className='h-auto w-full max-w-md rounded-2xl'

                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}