import React, { useState } from 'react'

export default function StatisticsLine() {
    const [statistics, setStatistics] = useState(true)

    if (statistics === false ) {
        return (
            <div className='text-[30px] font-[500]'>
                Sizda natijalar yo'q
            </div>
        )
    }

    return (
        <div className='w-full mb-10 border-b-[2px] border-gray-600 border-dashed pb-8'>
            <p className='mb-4 text-[28px] font-[500]'>Yechilgan quizlar foizi:</p>
                <div className='flex items-center gap-6'>
                    <span className='font-[500] text-[18px]'>Barchasi: </span>
                    <div className='w-[50vw] relative h-[15px] rounded-xl bg-gray-300'>
                        <span className='absolute top-0 h-full w-[76%] bg-blue-600 rounded-xl'></span>
                    </div>
                    <span className='font-[500]'>76%</span>
                </div>

                <div className='flex items-center gap-6'>
                    <span className='font-[500] text-[18px]'>Frontend: </span>
                    <div className='w-[50vw] relative h-[15px] rounded-xl bg-gray-300'>
                        <span className='absolute top-0 h-full w-[87%] bg-yellow-600 rounded-xl'></span>
                    </div>
                    <span className='font-[500]'>87%</span>
                </div>

                <div className='flex items-center gap-6'>
                    <span className='font-[500] text-[18px]'>Backend: </span>
                    <div className='w-[50vw] relative h-[15px] rounded-xl bg-gray-300'>
                        <span className='absolute top-0 h-full w-[46%] bg-green-600 rounded-xl'></span>
                    </div>
                    <span className='font-[500]'>46%</span>
                </div>
        </div>
    )
}