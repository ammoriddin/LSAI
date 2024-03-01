import React from 'react'
import QAsection from '../../components/qasection/qasection'

export default function QuizPlay() {
  return (
    <section>
      <div className='container'>
        <div className='w-full h-[80vh] flex items-center justify-center flex-col'>
          <div className='border-b-[2px] border-gray-500 border-dashed pb-6 mb-6'>
            <h1 className='text-[35px] font-[500] text-center mb-4'>
              Quiz Name:
            </h1>
            <p className='font-[500] text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt maxime odio quis labore voluptatum.</p>
          </div>

          <div className='p-[20px] bg-gray-300 w-full rounded-xl'>
            <h2 className='text-[18px] font-[500] mb-6'>Ko'k ingiliz tilida qanday bo'ladi? <span className='ml-4'>1 of 10</span></h2>
            
            <QAsection />

          </div>

        </div>
      </div>
    </section>
  )
}
