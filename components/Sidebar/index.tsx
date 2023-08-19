import React, { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Admin, Cut, Dashboard, Note, Quiz } from '../svg'
import SideMenu from './SideMenu'
import { useStateContext } from '@/lib/add-assessment-context'

// Side Menu Data
const sideMenu = [
  { id: 1, icon: Dashboard, active: false, title: 'Dashboard', admin: false },
  { id: 2, icon: Note, active: true, title: 'Assessment', admin: false },
  { id: 3, icon: Quiz, active: false, title: 'My Library', admin: false },
  { id: 4, icon: Admin, active: false, title: 'Round Status', admin: true },
]

/**
 *
Desktop Sidebar
 */
const Sidebar = () => {
  const context = useStateContext()

  if (!context) {
    return null
  }
  const { showSidebar } = context

  // Disable scrolling when sidebar open
  function disableScrolling(){
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  useEffect(() => {
    disableScrolling()
  }, [showSidebar])

  return (
    <>
      <div className="sidebar__desktop__container">
        {sideMenu.map((item) => {
          return (
            <SideMenu
              key={item.id}
              Icon={item.icon}
              active={item.active}
              title={item.title}
              admin={item.admin}
            />
          )
        })}
      </div>
      <AnimatePresence>{showSidebar && <MobileHeader />}</AnimatePresence>
    </>
  )
}

export default Sidebar

/**
 *
Mobile Sidebar
 */
const MobileHeader = () => {
  const context = useStateContext()

  if (!context) {
    return null
  }
  const { setShowSidebar } = context

  return (
    <motion.div
      className="sidebar__mobile__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div onClick={() => setShowSidebar(false)} className="sidebar__mobile__overlay"></div>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ type: 'tween' }}
        className="sidebar__mobile__wrapper"
      >
        <div className="sidebar__mobile__top__wrapper">
          <h3>Menu</h3>
          <Cut onClick={() => setShowSidebar(false)} />
        </div>
        {sideMenu.map((item) => {
          return (
            <SideMenu
              key={item.id}
              Icon={item.icon}
              active={item.active}
              title={item.title}
              admin={item.admin}
            />
          )
        })}
      </motion.div>
    </motion.div>
  )
}
