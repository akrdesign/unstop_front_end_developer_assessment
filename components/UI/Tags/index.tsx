import { Cut } from '@/components/svg'
import React from 'react'

interface tagsPropsType {
  children: React.ReactNode
}

const Tags = ({ children }: tagsPropsType) => {
  return (
    <div className="tags__wrapper">
      <span>{children}</span>
      <Cut />
    </div>
  )
}

export default Tags
