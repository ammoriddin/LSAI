import { Button } from 'flowbite-react'
import React from 'react'

export default function Tdocumentation() {
  return (
    <div className='flex flex-col gap-8'>
      <h1 className='text-[50px] font-[500]'>Html kirish</h1>

      <Button className='w-[150px]'>Asosiy</Button>

      <p className='font-[500]'>Lorem ipsum dolor, sit amet consectetur <span className='text-red-700'>adipisicing</span> elit. Eum a obcaecati neque nulla harum error voluptatem placeat cum dolorem commodi mollitia <span className='text-green-700'>assumenda</span> recusandae, fuga repudiandae, debitis provident cumque reiciendis saepe!</p>

      <p className='font-[500]'>Lorem ipsum dolor sit amet <span className='text-yellow-700'>consectetur</span> adipisicing elit. Eveniet, consequatur?</p>

      <Button className='w-[150px]'>Sinab ko'rish</Button>

      <hr />

      <p className='font-[500]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit magni sint consectetur sed nemo aut quo rem blanditiis culpa vitae ducimus doloribus quis unde <span className='text-blue-700'>nisi similique quibusdam</span> neque, est ullam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga placeat laudantium <span className='text-gray-700'>repellat, provident aliquid</span> possimus! A quidem cumque amet sunt hic. In fugiat error eius cumque optio, quam aperiam neque.</p>

      <Button className='w-[150px]'>Tugadi</Button>
    </div>
  )
}
