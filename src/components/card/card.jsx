import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({title, description, id}) {
  return (
    <div className='w-[300px] rounded-xl mb-10'>
        <div className='h-[150px] flex items-center justify-center rounded-xl bg-gray-300'>
            <span className='text-[20px] font-[500]'>{title}</span>
        </div>
        <div className='p-[10px]'>
            <h2 className='mb-4 text-[19px] font-[600]'>{title}</h2>
            <p className='text-[17px] mb-4 font-[500] text-gray-700'>{description}</p>
            <Link to={`/docs/user/${id+12}/doc/${id}`} className='bg-blue-800 py-[10px] text-white text-[16px] font-[500] px-[25px] rounded-xl'>O'qish</Link>
        </div>
    </div>
  )
}