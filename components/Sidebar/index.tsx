'use client';
import React from 'react'
import { Admin, Dashboard, Note, Quiz } from '../svg'
import SideMenu from './SideMenu'

const sideMenu = [
    { id: 1, icon: Dashboard, active: false, title: 'Dashboard', admin: false},
    { id: 2, icon: Note, active: true, title: 'Assessment', admin: false},
    { id: 3, icon: Quiz, active: false, title: 'My Library', admin: false},
    { id: 4, icon: Admin, active: false, title: 'Round Status', admin: true},
]

const Sidebar = () => {
  return (
    <div className="sidebar__desktop__container">
        {sideMenu.map((item) => {
            return <SideMenu key={item.id} Icon={item.icon} active={item.active} title={item.title} admin={item.admin} />
        })}
    </div>
  )
}

export default Sidebar