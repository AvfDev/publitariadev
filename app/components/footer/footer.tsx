import Link from 'next/link';
import React from 'react'

const currentYear = new Date().getFullYear();

const footer = () => {
  return (
    <main>

      <div className='flex my-24'>
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
        <div className='grow-1 w-1/4 text-sm leading-loose'>
          <ul>
            <li className='text-zinc-600'>Inicio</li>
            <li className='text-zinc-600'>Servicios</li>
            <li className='text-zinc-600'>Nosotros</li>
            <li className='text-zinc-600'>Contacto</li>
          </ul>
        </div>
        <div className='grow-1 w-1/4 text-sm leading-loose'>
          <ul>
            <li className='text-zinc-600'><Link href='https://instagram.com'>Instagram</Link></li>
            <li className='text-zinc-600'><Link href='https://facebook.com'>Facebook</Link></li>
            <li className='text-zinc-600'><Link href="https://tiktok.com">TikTok</Link></li>
            <li className='text-zinc-600'><Link href="https://youtube.com">YouTube</Link></li>
          </ul>
        </div>
        <div className='grow-1 w-1/4 text-sm leading-loose'>
        <ul>
            <li className='text-zinc-600'>Por qué Publitaria?</li>
            <li className='text-zinc-600'>Hablar con ventas</li>
            <li className='text-zinc-600'>Sala de Prensa</li>
            <li className='text-zinc-600'></li>
          </ul>
        </div>
    </div>
    <div className='text-center'>
      <p className='text-xs text-zinc-600'>&#169;{currentYear} Todos los Derechos Reservados.</p>
    </div>
    </main>
  )
}

export default footer