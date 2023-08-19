import React from 'react'
import { Laptop, Mobile, Segment } from '../svg'
import { useStateContext } from '@/lib/add-assessment-context'

const DesktopHeader = () => {
  const ctx = useStateContext()

  if (!ctx) return null

  const { setShowSidebar } = ctx

  return (
    <>
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
      <div className="header__mobile__wrapper">
        <div className="mobile__header__top">
          <div className="header__left__content">
            <div
              className="hamburger__wrapper"
              onClick={() => setShowSidebar(true)}
            >
              <Segment />
            </div>
            <h1>Assessment</h1>
          </div>
          <div className="header__right__content">
            <Laptop />
          </div>
        </div>
        <div className="mobile__header__bottom">
          <div className="mobile__header__tab__wrapper active">
            <h1>My Assessments</h1>
          </div>
          <div className="mobile__header__tab__wrapper">
            <h1>Unstop Assessments</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesktopHeader
