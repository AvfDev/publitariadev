import Link from 'next/link'
import React from 'react'

const navigation = () => {
    return (
        <div className='flex flex-row flex-nowrap'>
            <div className='grow-1 w-1/4'>
                <a
                    className="place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/logo.png"
                        alt="Publitaria Logo"
                        width="100"
                        height="24"
                    />
                </a>
            </div>
            <div className='grow-3 text-center content-center w-1/2'>
                <nav className='space-x-6'>
                    <Link href="/" className='font-sans text-gray-700'>INICIO</Link>
                    <Link href="/servicios" className='font-sans text-gray-700'>SERVICIOS</Link>
                    <Link href="/nosotros" className='font-sans text-gray-700'>SOBRE NOSOTROS</Link>
                    <Link href="/nosotros" className='font-sans text-gray-700'>CONTACTO</Link>
                </nav>
            </div>
        </div>
    )
}

export default navigation