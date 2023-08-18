import React from 'react'
import { Mobile } from '../svg'

const Header = () => {
  return (
    <div className="header__desktop__wrapper">
      <div className="header__left__content">
        <h1>Assessment</h1>
        <span className="break__line" />
        <div className="header__tag__wrapper">
          <h3>My Assessments</h3>
        </div>
      </div>
      <div className="header__right__content">
        <Mobile />
      </div>
    </div>
  )
}

export default Header
