import React from 'react'
import TopicsSidebar from './topics-sidebar'
import Tdocumentation from './tdocumentation'

export default function Tdocpage() {
  return (
    <div className='flex w-full'>
        <div className='mt-[40px] px-[40px] py-[20px] w-full rounded-t-[20px] bg-[#171717] text-white z-[40000]'>

            <div className='flex justify-center my-[20px] flex-wrap gap-5'>
                <span className='bg-gray-500 h-[55px] w-[55px] rounded-[50%] flex items-center justify-center'>
                    Me )
                </span>
                <div>
                    <h2 className='text-[20px] font-[500]'>Myname Albu..............</h2>
                    <span className='text-[17px] font-[400]'>bumani@gmail.comim</span>
                </div>
            </div>

            <div className='flex gap-10'>
                <TopicsSidebar />
                <Tdocumentation />
            </div>


            </div>
    </div> 
  )
}