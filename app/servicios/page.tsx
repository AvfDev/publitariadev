import Link from 'next/link'
import React from 'react'

const servicesPage = () => {
  return (
    <main>
        <div>
            <h1>
                Services Page
            </h1>
            <Link href="/nosotros">Nosotros</Link>
        </div>
    </main>
  )
}

export default servicesPage