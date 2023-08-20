import { ArrowDown } from '@/components/svg'
import React, { useState } from 'react'

interface Option {
  value: string
  label: string
}

interface DropdownProps {
  options: Option[]
  label: string
}

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  // Selecting option value
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  // Make dropdown open or close
  const [isOpen, setIsOpen] = useState(false)

  const handleOptionClick = (value: string) => {
    setSelectedOption(value)
    setIsOpen(false)
  }

  return (
    <div className="dropdown__wrapper">
      <label>{label}</label>
      <div
        className={isOpen ? 'dropdown__trigger active' : 'dropdown__trigger'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="dropdown__trigger__top">
          <span>{selectedOption ? selectedOption : 'Select'}</span>{' '}
          <ArrowDown className={isOpen ? 'active' : ''} />
        </div>
        {isOpen && (
          <ul className="dropdown__options">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
