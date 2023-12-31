import { participantsProps } from '@/type/index'
import React from 'react'

interface AvatarProps {
  participants: participantsProps[]
}

const Avatar = ({ participants }: AvatarProps) => {
  return (
    <div className="avatar-group">
      {participants.map((item, idx) => {
        return (
          <div
            key={idx}
            className="avatar"
            style={{ background: `#${item.color}` }}
          >
            <h5>{item.name}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default Avatar
