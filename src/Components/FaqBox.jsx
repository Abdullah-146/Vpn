import React from 'react'
import FaqItem from './FaqItem'
import FaqIcon from '../Svgs/FaqIcon'

const FaqBox = () => {
  return (
    <div className='flex-1 flex flex-col container'>
       <div className='flex flex-row items-center justify-center space-x-4'>
            <FaqIcon />
            <p className='font-subHeading text-simple'>Your Questions</p>
       </div>
       <p className='font-heading text-heading text-center'>FAQ</p>
       <div className='flex-1 flex flex-col space-y-4 p-4'>
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
       </div>
    </div>
  )
}

export default FaqBox