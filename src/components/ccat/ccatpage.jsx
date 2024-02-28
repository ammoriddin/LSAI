import React from 'react'
import muscle from '../../assets/muscle.png'
import lighting from '../../assets/lighting.png'
import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import Card from '../card/card'

export default function CcatPage() {
  return (
    <>
        <div className='mb-[40px] mt-[7rem] relative rounded-[20px] ccat-bg'>
            <div className='w-[170px] absolute top-[-7rem] left-[-7rem] rotate-[-20deg]'>
                <img className='w-full' src={muscle} alt="" />
            </div> 

            <div className='w-[130px] absolute bottom-[-6rem] right-[-6rem]'>
                <img className='w-full' src={lighting} alt="" />
            </div>
            <div className='w-full px-[35px] pb-[30px] pt-[33.5%] rounded-[20px] h-full flex flex-col justify-end bg-black/60'>
                <h1 className='text-white mb-4 font-[600] text-[40px] uppercase'>Create Course And Test</h1>
                <p className='text-white mb-8 font-[300] text-[17px]'>Course haqida ma'lumot bering va biz uni sizga yaratib beramiz + <span className='font-[400]'>(testlari bilan)</span></p>
                <form>
                    <div className='flex gap-5 items-center mb-4'>
                        <div className='w-[50%]'>
                            <Label className='text-white font-[500] text-[18px]'>Course Nomi</Label>
                            <TextInput  />
                        </div>
                        <div className='w-[50%]'>
                            <Label className='text-white font-[500] text-[18px]'>Qaysi texnologiyalar bo'ladi?</Label>
                            <TextInput  />
                        </div>
                    </div>
                    <div className='mb-8'>
                        <Label className='text-white font-[500] text-[18px]'>Kursga tavsif berib o'ting</Label>
                        <Textarea  />
                    </div>
                    <Button className='px-[10px] mx-auto'>Yaratish</Button>
                </form>
            </div>
        </div>

        <Card title={'Nodejs'} description={'lorem ipsum dolor sit 2010 1900 hello mello bu test'} id={54} />
    </>
  )
}