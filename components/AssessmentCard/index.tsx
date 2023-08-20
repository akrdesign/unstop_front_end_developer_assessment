import React from 'react'
import { Calender, ThreeDot, Work } from '../svg'
import ShareLink from '../ShareLink'
import Avatar from '../UI/Avatar'
import { participantsProps } from '@/type/index'

interface AssessmentCardProps {
  title: string
  type: string
  date: string
  duration: number
  question: number
  participants: participantsProps[]
}

const AssessmentCard = ({
  title,
  type,
  date,
  duration,
  question,
  participants,
}: AssessmentCardProps) => {
  return (
    <div className="assessment__card__wrapper">
      <div className="assessment__card__top__wrapper">
        <div className="left__content__wrapper">
          <div className="icon__cover">
            <Work />
          </div>
          <div className="assessment__details">
            <h1 className="assessment__title">{title}</h1>
            <div className="assessment__other__details">
              <span>{type}</span>
              <span className="divider" />
              <span className="date">
                <Calender /> {date}
              </span>
            </div>
          </div>
        </div>
        <div className="right__content__wrapper">
          <div className="icon__wrapper">
            <ThreeDot />
          </div>
        </div>
      </div>
      <div className="assessment__card__divider"></div>
      <div className="assessment__card__bottom__wrapper">
        <div className="left__content__wrapper">
          <div className="duration__cover">
            <div>0{duration}</div>
            <div>Duration</div>
          </div>
          <div className="question__cover">
            <div>0{question}</div>
            <div>question</div>
          </div>
        </div>
        <div className="right__content__wrapper">
          <ShareLink />
          <Avatar participants={participants} />
          <span>+324</span>
        </div>
      </div>
    </div>
  )
}

export default AssessmentCard
