import { Button, TextInput } from 'flowbite-react'
import React from 'react'

export default function QuizPage() {
  return (
    <section>
        <div className='container'>
            <div className='w-full gap-5 h-[80vh] flex items-center justify-center'>
                <TextInput className='w-[50%]' placeholder='Quiz Code' />
                <Button className='px-[15px]'>Kirish</Button>
            </div>
        </div>
    </section>
  )
}