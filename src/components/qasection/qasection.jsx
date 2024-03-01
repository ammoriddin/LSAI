import { Button } from 'flowbite-react'
import React from 'react'
import fire from '../../assets/fire.png'
import lighting from '../../assets/lighting.png'
import muscle from '../../assets/muscle.png'
import programmerEmoji from '../../assets/programmer-emoji.png'

export default function QAsection() {
  return (
    <>
      <div className='w-full flex gap-5 flex-wrap justify-between items-center mb-4'>
        <div className='relative'>
          <button className='w-[500px] font-[500] py-[10px] rounded-xl bg-black text-white'>Yelow</button>        
          <img className='absolute top-[-20px] left-[-30px] rotate-[-30deg] w-[80px]' src={fire} alt="" />
        </div>
        <div className='relative'>        
          <button className='w-[500px] font-[500] py-[10px] rounded-xl bg-white'>Red</button>
          <img className='absolute top-[-20px] right-[-30px] rotate-[30deg] w-[50px]' src={lighting} alt="" />
        </div>
        <div className='relative'>        
          <button className='w-[500px] font-[500] py-[10px] rounded-xl bg-white'>Green</button>
          <img className='absolute top-[-20px] right-[-30px] rotate-[30deg] w-[70px]' src={muscle} alt="" />
        </div>  
        <div className='relative'>        
          <button className='w-[500px] font-[500] py-[10px] rounded-xl bg-black text-white'>Blue</button>
          <img className='absolute top-[-26px] left-[-50px] rotate-[-115deg] w-[80px]' src={programmerEmoji} alt="" />
        </div>
      </div>

      <Button className='px-[10px]'>O'tqizib Yuborish</Button>
    </>
  )
}