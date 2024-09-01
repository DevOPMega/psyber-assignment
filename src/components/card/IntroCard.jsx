import React from 'react'
import Card from './Card'
import Link from 'next/link'

const IntroductionCard = ({title, description}) => {
  return (
    <Card>
      <div className="basis-1/2 flex flex-col space-y-2 px-4 py-6">
        <h2 className="text-xl text-heading font-semibold">{title}</h2>
        <p className="text-[15px] font-light text-text-1">{description}</p>
        <Link className="font-semibold text-sm" href="/know-more">KNOW MORE</Link>
      </div>
    </Card>
  )
}

export default IntroductionCard
