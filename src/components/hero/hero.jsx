import React from 'react'
import searchIcon from '../../assets/search-icon.svg'
import { Button, TextInput } from 'flowbite-react'

export default function Hero() {
  return (
    <div className='px-[35px] py-[30px] my-[40px] rounded-[20px] h-[75vh] hero-bg'>
        <div className='w-full h-full flex flex-col justify-end'>
            <h1 className='text-white mb-4 font-[600] text-[40px] uppercase'>Learning Smarter AI...</h1>
            <p className='text-white mb-8 font-[300] text-[17px]'>Texnologiya nomini kiriting va to'liq documentatsiyaga ega bo'ling...</p>
            <div className='p-[10px] shadow-xl w-[700px] items-center flex justify-between rounded-[15px] bg-white '>
                <div className='w-[25px]'>
                    <img className='w-full' src={searchIcon} alt="" />
                </div>
                <TextInput className='w-full input font-[600]' />
                <Button className='rounded-[10px]'>Qidirish</Button>
            </div>
        </div>
    </div>
  )
}