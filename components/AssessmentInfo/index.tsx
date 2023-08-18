import React from 'react'

type AssessmentInfo = {
  Icon?: React.ElementType;
  count?: number
  increment?: number
  title?: string
  bgColor?: string
  iconColor?: string
}

const AssessmentInfo = ({ Icon, count, increment, title, bgColor, iconColor }: AssessmentInfo) => {
  const numberWithCommas = (number: number) => {
    return number.toLocaleString();
  };

  const formattedCount = count !== undefined ? numberWithCommas(count) : '';

  return (
    <div className="assessment__info__wrapper">
      {Icon && (
        <div className="icon__wrapper" style={{ backgroundColor: bgColor }}>
          <Icon style={{fill: iconColor}} />
        </div>
      )}
      <div className="content__wrapper">
        <div className="number__count__cover">
          {count && <h3 className="count">{formattedCount}</h3>}
          {increment && <span className="increment__count">+{increment}</span>}
        </div>
        {title && <div className="title">{title}</div>}
      </div>
    </div>
  )
}

export default AssessmentInfo
