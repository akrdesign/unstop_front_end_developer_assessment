import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import { BarChart, Filter, Search } from '@/components/svg'
import AssessmentCard from '@/components/AssessmentCard'
import AddAssessmentCard from '@/components/AddAssessmentCard'
import {
  AssessmentOverviewDesktop,
  AssessmentOverviewMobile,
} from '@/components/AssessmentOverview'
import { useStateContext } from '@/lib/add-assessment-context'

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
  const ctx = useStateContext()

  if (!ctx) return null

  const { showAssOverview, setShowAssOverview } = ctx

  return (
    <div className="assessment__page__wrapper page">
      <Header />
      <main className="assessment__content__wrapper">
        <AssessmentOverviewDesktop />
        <AnimatePresence>
          {showAssOverview && <AssessmentOverviewMobile />}
        </AnimatePresence>
        <div className={showAssOverview ? "my__assessment__wrapper" : "my__assessment__wrapper active"}>
          <div className="my__assessment__header">
            <h1 className="my__assessment__heading">My assessment</h1>
            <span>
              <Search />
              <Filter />
              <BarChart className={showAssOverview ? 'active' : ''} onClick={() => setShowAssOverview(!showAssOverview)} />
            </span>
          </div>
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
