import { ArrowDown } from '@/components/svg'
import React from 'react'
import Tags from '../Tags'

interface InputPropsType {
  label: string
  type: string
  placeholder: string
  dropdown?: boolean
  skills?: boolean
  skillsData?: string[]
}

const Input = ({
  type,
  placeholder,
  label,
  dropdown,
  skills,
  skillsData,
}: InputPropsType) => {
  return (
    <div className="input__wrapper">
      <label>{label}</label>
      {skills && skillsData && (
        <div className="skills__container">
          {skillsData.map((skill, idx) => {
            return <Tags key={idx}>{skill}</Tags>
          })}
        </div>
      )}
      <div className={skills ? 'input__cover skills' : 'input__cover'}>
        <input type={type} placeholder={placeholder} />
        {dropdown && <ArrowDown />}
      </div>
    </div>
  )
}

export default Input
