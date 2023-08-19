import { AnimatePresence } from 'framer-motion'
import AddAssessmentForm from '@/components/AddAssessmentForm'
import Assessment from './Assessment'
import { useStateContext } from '@/lib/add-assessment-context'

export default function Home() {
  const { showForm } = useStateContext()
  return (
    <>
      <Assessment />
      <AnimatePresence>{showForm && <AddAssessmentForm />}</AnimatePresence>
    </>
  )
}
