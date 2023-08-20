import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import AddAssessmentForm from '@/components/AddAssessmentForm'
import Assessment from './Assessment'
import { useStateContext } from '@/lib/add-assessment-context'

export default function Home() {
  const ctx = useStateContext()

  if (!ctx) return null

  const { showForm } = ctx

  return (
    <>
      <Head>
        <title>Unstop Front End Developer Assessment</title>
      </Head>
      {/* Assessment Page */}
      <Assessment />
      {/* Assessment Form */}
      <AnimatePresence>{showForm && <AddAssessmentForm />}</AnimatePresence>
    </>
  )
}
