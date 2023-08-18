import { ArrowDown } from '@/components/svg'
import React from 'react'
import Tags from '../Tags'

interface InputPropsType {
  label: string
  type: string
  placeholder: string
  dropdown?: boolean
  skills?: boolean
}

const skillsData = [
  'UI/UX and Design',
  'No of Question',
  'Web Development',
  'UI/UX and Design',
  'Web Development',
]

const Input = ({
  type,
  placeholder,
  label,
  dropdown,
  skills,
}: InputPropsType) => {
  return (
    <div className="input__wrapper">
      <label>{label}</label>
      {skills && (
        <div className="skills__container">
          {skillsData.map((skill, idx) => {
            return <Tags key={idx}>{skill}</Tags>
          })}
        </div>
      )}
      <div className="input__cover">
        <input type={type} placeholder={placeholder} />
        {dropdown && <ArrowDown />}
      </div>
    </div>
  )
}

export default Input
