import React from 'react'
import Sidebar from '../Sidebar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="main__content">
      <div className="desktop__sidebar">
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
