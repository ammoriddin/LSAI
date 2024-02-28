import React from 'react'
import Card from '../card/card'
import searchIcon from '../../assets/search-icon.svg'
import { Button, TextInput } from 'flowbite-react'

export default function DocsSection() {
  return (
    <div className='my-[40px]'>

        <div className='p-[10px] border-2 border-dashed mb-8 w-[700px] items-center flex justify-between rounded-[15px] bg-white '>
            <div className='w-[25px]'>
                <img className='w-full' src={searchIcon} alt="" />
            </div>
            <TextInput className='w-full input font-[600]' />
            <Button className='rounded-[10px]'>Qidirish</Button>
        </div>

        <h1 className='text-[35px] font-[600] text-gray-600 mb-8'>Barcha documentatsiyalar</h1>

        <div className='flex justify-between flex-wrap'>
            <Card title={'React Js'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={12} />
            <Card title={'Node Js'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={34} />
            <Card title={'Html'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={22} />
            <Card title={'Css'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={18} />
            <Card title={'Dart'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={27} />
            <Card title={'Flutter'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={57} />
            <Card title={'Javascript'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={91} />
            <Card title={'Rust'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={46} />
        </div>

        <h1 className='text-[35px] font-[600] text-gray-600 mb-8'>FrontEnd documentatsiyalar</h1>

        <div className='flex justify-between flex-wrap'>
            <Card title={'React Js'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={12} />
            <Card title={'Html'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={22} />
            <Card title={'Css'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={18} />
            <Card title={'Javascript'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={91} />
        </div>

        <h1 className='text-[35px] font-[600] text-gray-600 mb-8'>Backend documentatsiyalar</h1>

        <div className='flex justify-between flex-wrap'>
            <Card title={'Node Js'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={34} />
            <Card title={'Rust'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={46} />
        </div>

        <h1 className='text-[35px] font-[600] text-gray-600 mb-8'>Mobile documentatsiyalar</h1>

        <div className='flex justify-between flex-wrap'>
            <Card title={'Dart'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={27} />
            <Card title={'Flutter'} description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ...'} id={57} />
        </div>

    </div>
  )
}