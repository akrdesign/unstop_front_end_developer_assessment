import React from 'react'
import Sidebar from '../Sidebar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ display: 'flex' }}>
      <div className="desktop__sidebar">
        <Sidebar />
      </div>
      <main className="main__content">{children}</main>
    </div>
  )
}

export default Layout
