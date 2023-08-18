import { AnimatePresence } from 'framer-motion'
import AddAssessmentForm from '@/components/AddAssessmentForm'
import Assessment from './Assessment'
import { useAssessmentContext } from '@/lib/add-assessment-context'

export default function Home() {
  const { showForm } = useAssessmentContext()
  return (
    <>
      <Assessment />
      <AnimatePresence>{showForm && <AddAssessmentForm />}</AnimatePresence>
    </>
  )
}
