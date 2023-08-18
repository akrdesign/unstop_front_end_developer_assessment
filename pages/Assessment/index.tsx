import React from 'react'
import Header from '@/components/Header'
import AssessmentInfo from '@/components/AssessmentInfo'
import { CaptivePortal, Link, Users, ViewAgenda } from '@/components/svg'
import AssessmentCard from '@/components/AssessmentCard'
import AddAssessmentCard from '@/components/AddAssessmentCard'

const myAssessment = [
  {
    id: 1,
    title: 'Math assessment',
    type: 'job',
    date: '20 Apr 2023',
    duration: 0,
    question: 0,
    participants: [{ name: 'LP', color: '6548EE' }],
  },
  {
    id: 2,
    title: 'Math assessment',
    type: 'job',
    date: '20 Apr 2023',
    duration: 0,
    question: 0,
    participants: [
      { name: 'LP', color: '6548EE' },
      { name: 'LP', color: '3079E1' },
      { name: 'LP', color: 'E9407A' },
    ],
  },
]

const Assessment = () => {
  return (
    <div className="assessment__page__wrapper page">
      <Header />
      <main className="assessment__content__wrapper">
        <div className="assessment__overview__wrapper">
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
                <AssessmentInfo
                  count={114}
                  increment={89}
                  title="Who Attamped"
                />
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
                <AssessmentInfo
                  count={145}
                  increment={89}
                  title="Social Share"
                />
                <span className="divider" />
                <AssessmentInfo
                  count={145}
                  increment={89}
                  title="Unique Link"
                />
              </div>
            </div>
            <div className="assessment__overview__card">
              <h2>Total Purpose</h2>
              <div className="candidates__info">
                <AssessmentInfo Icon={Link} count={11} bgColor="#E5F1FC" />
              </div>
            </div>
          </div>
        </div>
        <div className="my__assessment__wrapper">
          <h1 className="my__assessment__heading">My assessment</h1>
          <div className="my__assessments__container">
            <AddAssessmentCard />
            {myAssessment.map((info) => {
              return (
                <AssessmentCard
                  key={info.id}
                  title={info.title}
                  type={info.type}
                  date={info.date}
                  duration={info.duration}
                  question={info.question}
                  participants={info.participants}
                />
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Assessment
