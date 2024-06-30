import Link from 'next/link'
import React from 'react'

const contactPage = () => {
    return (
        <main>
            <div>
                <h2 className='text-zinc-800 my-4'>
                    Contactanos
                </h2>

                <div className='my-1 w-1/2'>
                    <form className='rounded-md main-banner py-4 px-8 text-sm font-semibold text-white border-solid border-3'>
                        <h2 className='my-4'>Formulario de Contacto</h2>
                        <div className='my-2'>
                            <label htmlFor="name" className='block'>Nombre:</label>
                            <input
                                className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300'
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div className='my-2'>
                            <label htmlFor="email" className='block'>Email:</label>
                            <input
                                className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300'
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div className='my-2'>
                            <label htmlFor="message" className='block'>Mensaje:</label>
                            <textarea
                                id="message"
                                className='rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300'
                                name="message"
                                required
                            />
                        </div>
                        <button type="submit" className='my-4 rounded-md main-banner py-4 px-8 text-sm font-semibold text-white text-center border-solid border-2 border-white'>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default contactPage