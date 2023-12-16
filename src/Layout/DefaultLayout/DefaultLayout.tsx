import React from 'react'
import { Header } from '~/components'

interface DefaultLayoutProps {
  children: React.ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <Header />
      <div className="h-screen w-full bg-[url('/src/assets/images/bg-image-main.png')] bg-cover bg-center bg-no-repeat">
        {children}
      </div>
    </>
  )
}

export default DefaultLayout
