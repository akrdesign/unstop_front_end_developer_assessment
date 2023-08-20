import { motion } from 'framer-motion'

import { useStateContext } from '@/lib/add-assessment-context'
import { Cut } from '../svg'
import Input from '../UI/Input'
import Button from '../UI/button'
import Dropdown from '../UI/Dropdown'

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" }
];

const skillsData = [
  'UI/UX and Design',
  'No of Question',
  'Web Development',
  'UI/UX and Design',
  'Web Development',
]


const AddAssessmentForm = () => {
  const ctx = useStateContext()

  if(!ctx) return null

  const { setShowForm } = ctx

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
            <h1 className='assessment__form__header__heading--desktop'>Create new assessment</h1>
            <h1 className='assessment__form__header__heading--mobile'>Sub-Section Details</h1>
            <Cut onClick={() => setShowForm(false)} />
          </div>
          <form>
            <Input
              label="Name of assessment"
              placeholder="Type Here"
              type="text"
            />
            <Dropdown options={options} label="Purpose of the test is" />
            <Dropdown options={options} label="Description" />
            <Input
              label="Skills"
              placeholder="Type here"
              type="text"
              skills={true}
              skillsData={skillsData}
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
