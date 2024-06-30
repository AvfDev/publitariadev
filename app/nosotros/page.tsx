import Link from 'next/link'
import React from 'react'

const aboutPage = () => {
  return (
    <main>
      <div>
          <h1>
              Nosotros Page
          </h1>
          <Link href="/servicios">Servicios</Link>
      </div>
    </main>
  )
}

export default aboutPage