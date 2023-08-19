import React from 'react'
import { motion } from 'framer-motion'
import AssessmentInfo from '../AssessmentInfo'
import { CaptivePortal, LinkIcon, Users, ViewAgenda } from '../svg'

export const AssessmentOverviewDesktop = () => {
  return (
    <div className="assessment__overview__wrapper desktop">
      <h1 className="assessment__overview__wrapper__title">
        Assessments Overview
      </h1>
      <div className="assessment__overview__cover">
        <div className="assessment__overview__card">
          <h2>Total Assessment</h2>
          <AssessmentInfo Icon={ViewAgenda} count={34} bgColor="#EBE8FD" />
        </div>
        <div className="assessment__overview__card">
          <h2>candidates</h2>
          <div className="candidates__info">
            <AssessmentInfo
              Icon={Users}
              count={11145}
              increment={89}
              title="total candidates"
              bgColor="#EBE8FD"
            />
            <span className="divider" />
            <AssessmentInfo count={114} increment={89} title="Who Attamped" />
          </div>
        </div>
        <div className="assessment__overview__card">
          <h2>Candidates Source</h2>
          <div className="candidates__info">
            <AssessmentInfo
              Icon={CaptivePortal}
              count={11000}
              increment={89}
              title="E-mail"
              bgColor="#FCE8EF"
            />
            <span className="divider" />
            <AssessmentInfo count={145} increment={89} title="Social Share" />
            <span className="divider" />
            <AssessmentInfo count={145} increment={89} title="Unique Link" />
          </div>
        </div>
        <div className="assessment__overview__card">
          <h2>Total Purpose</h2>
          <div className="candidates__info">
            <AssessmentInfo Icon={LinkIcon} count={11} bgColor="#E5F1FC" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const AssessmentOverviewMobile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      // transition={{ type: 'tween' }}
      className="assessment__overview__wrapper mobile"
    >
      <h1 className="assessment__overview__wrapper__title">
        Assessments Overview
      </h1>
      <div className="assessment__overview__cover">
        <div className="assessment__overview__card__cover">
          <div className="assessment__overview__card">
            <h2>Total Assessment</h2>
            <AssessmentInfo Icon={ViewAgenda} count={34} bgColor="#EBE8FD" />
          </div>
          <div className="assessment__overview__card">
            <h2>Total Purpose</h2>
            <div className="candidates__info">
              <AssessmentInfo Icon={LinkIcon} count={11} bgColor="#E5F1FC" />
            </div>
          </div>
        </div>
        <div className="assessment__overview__card__cover">
          <div className="assessment__overview__card">
            <h2>candidates</h2>
            <div className="candidates__info">
              <AssessmentInfo
                Icon={Users}
                count={11145}
                increment={89}
                title="total candidates"
                bgColor="#EBE8FD"
              />
              <span className="divider" />
              <AssessmentInfo count={114} increment={89} title="Who Attamped" />
            </div>
          </div>
        </div>
        <div className="assessment__overview__card__cover">
          <div className="assessment__overview__card">
            <h2>Candidates Source</h2>
            <div className="candidates__info">
              <AssessmentInfo
                Icon={CaptivePortal}
                count={11000}
                increment={89}
                title="E-mail"
                bgColor="#FCE8EF"
              />
              <span className="divider" />
              <AssessmentInfo count={145} increment={89} title="Social Share" />
              <span className="divider" />
              <AssessmentInfo count={145} increment={89} title="Unique Link" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
