import React from 'react'

interface SideMenuType {
  Icon: any
  title: string
  admin: boolean
  active: boolean
}

const SideMenu = ({ Icon, title, admin, active }: SideMenuType) => {
  return (
    <div
      className={active ? 'side__menu__wrapper active' : 'side__menu__wrapper'}
    >
      {admin && (
        <>
          <span className="side__menu__admin__br"></span>
          <span className="side__menu__admin">Admin</span>
        </>
      )}
      <span className="side__menu__icon">
        <Icon />
      </span>
      <span className="side__menu__title">{title}</span>
    </div>
  )
}

export default SideMenu
