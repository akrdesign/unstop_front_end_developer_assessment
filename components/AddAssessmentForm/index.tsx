import React from 'react'
import { motion } from 'framer-motion'
import { useAssessmentContext } from '@/lib/add-assessment-context'
import { Cut } from '../svg'
import Input from '../UI/Input'
import Button from '../UI/button'

const AddAssessmentForm = () => {
  const { setShowForm } = useAssessmentContext()
  return (
    <motion.div
      className="assessment__form__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="assessment__form__card__wrapper">
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '100vh' }}
          transition={{ type: 'tween' }}
          className="assessment__form__card__cover"
        >
          <div className="assessment__form__header">
            <h1>Create new assessment</h1>
            <Cut onClick={() => setShowForm(false)} />
          </div>
          <form>
            <Input
              label="Name of assessment"
              placeholder="Type Here"
              type="text"
            />
            <Input
              label="Purpose of the test is"
              placeholder="Select"
              type="text"
              dropdown={true}
            />
            <Input
              label="Description"
              placeholder="Select"
              type="text"
              dropdown={true}
            />
            <Input
              label="Skills"
              placeholder="Type here"
              type="text"
              skills={true}
            />
            <Input
              label="Duration of assessment"
              placeholder="HH:MM:SS"
              type="text"
            />
            <div className="assessment__form__button">
              <Button>Save</Button>
            </div>
          </form>
        </motion.div>
      </div>
      <div
        className="assessment__form__overlay"
        onClick={() => setShowForm(false)}
      />
    </motion.div>
  )
}

export default AddAssessmentForm
