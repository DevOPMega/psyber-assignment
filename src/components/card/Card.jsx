import React from 'react'

const Card = ({children}) => {
  return (
    <div className="bg-white rounded-lg border-b-[5px] border-bg-2">
      {children}
    </div>
  )
}

export default Card
