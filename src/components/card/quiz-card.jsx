import { Button } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuizCard({id, title, describe}) {
  const navigate = useNavigate()

  return (
    <div className='w-[500px] flex flex-col items-center hover:shadow-xl transition-shadow justify-center bg-gray-300 rounded-xl p-[20px]'>
      <span className='text-[20px] mb-4 font-[500]'>{title}</span>
      <div className='flex flex-col items-center justify-center mb-4'>
        <p className='font-[600] text-[18px] text-green-500'>7/7</p>
        <p className='font-[500]'>{describe}</p>
      </div>
      <div className='flex items-start w-full'>
        <Button onClick={() => {
          navigate(`/statistics/user/${id}/quiz/${id + 3}`)
        }} className='px-[15px]'>Ko'rish -></Button>
      </div>
    </div>
  )
}