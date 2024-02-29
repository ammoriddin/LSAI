import React from 'react'

export default function QuizResultPage() {
  return (
    <section>
      <div className='container'>
        <div className='w-full mb-8 bg-gray-400 p-[30px] rounded-xl h-[20rem] flex justify-center items-center'>
          <h1 className='text-[4rem]'>
            Html Quiz results:
          </h1>
        </div>
        <div className='text-[30px] font-[500] mb-8 border-b-[2px] border-gray-400 border-dashed pb-8'>
          <h1 className='mb-8'>Siz Bu testni tugatdingiz</h1>
          <p className='mb-8'>To'g'ri javoblar: 4/6</p>
          <p>Sizning balingiz: 66.6%</p>
        </div>
        <div>
          <div className='mb-10'>
            <span className='text-[35px] font-[500] border-[2px] border-gray-600 border-dashed px-4 py-[4px] mb-4 rounded-xl'>Test nima?</span>
            <ul className='ml-8 mb-4'>
              <li className='text-[25px] font-[500] text-green-600'>a. Just Test ) <b>&#x2713;</b></li>
              <li className='text-[25px] border-[2px] border-red-600 inline px-[5px] rounded-md border-solid font-[500] text-red-600'>b. Testetion <b>&#x2715;</b></li>
              <li className='text-[25px] font-[500]'>c. Nimadur</li>
            </ul>
            <div className='w-full p-6 rounded-xl bg-gray-300'>
              <h2 className='text-[30px] font-500'>Transcription</h2>
              <p className='font-[500]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam libero reiciendis minima maiores earum impedit necessitatibus voluptatum commodi iusto cupiditate distinctio beatae enim corporis nobis iste aliquid veritatis, dolor tempora?</p>
            </div>
          </div>

          <div className='mb-10'>
            <span className='text-[35px] font-[500] border-[2px] border-gray-600 border-dashed px-4 py-[4px] mb-4 rounded-xl'>Test qachon?</span>
            <ul className='ml-8 mb-4'>
              <li className='text-[25px] font-[500]'>a. Testetion <b>&#x2715;</b></li>
              <li className='text-[25px] font-[500] text-green-600'>b. Just Test ) <b>&#x2713;</b></li>
              <li className='text-[25px] font-[500]'>c. Nimadur</li>
            </ul>
            <p className='text-[25px] inline-block mb-4 font-[500] ml-8 border-[2px] border-red-600 text-red-600 px-[10px] py-[5px] rounded-xl'>
              Bu savol o'tqizib yuborilgan
            </p>
            <div className='w-full p-6 rounded-xl bg-gray-300'>
              <h2 className='text-[30px] font-500'>Transcription</h2>
              <p className='font-[500]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam libero reiciendis minima maiores earum impedit necessitatibus voluptatum commodi iusto cupiditate distinctio beatae enim corporis nobis iste aliquid veritatis, dolor tempora?</p>
            </div>
          </div>

          <div className='mb-10'>
            <span className='text-[35px] font-[500] border-[2px] border-gray-600 border-dashed px-4 py-[4px] mb-4 rounded-xl'>Test qanday?</span>
            <ul className='ml-8 mb-4'>
              <li className='text-[25px] font-[500] text-green-600'>a. Just Test ) <b>&#x2713;</b></li>
              <li className='text-[25px] font-[500]'>b. Testetion <b>&#x2715;</b></li>
              <li className='text-[25px] font-[500]'>c. Nimadur</li>
            </ul>
            <div className='w-full p-6 rounded-xl bg-gray-300'>
              <h2 className='text-[30px] font-500'>Transcription</h2>
              <p className='font-[500]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam libero reiciendis minima maiores earum impedit necessitatibus voluptatum commodi iusto cupiditate distinctio beatae enim corporis nobis iste aliquid veritatis, dolor tempora?</p>
            </div>
          </div>

          <div className='mb-10'>
            <span className='text-[35px] font-[500] border-[2px] border-gray-600 border-dashed px-4 py-[4px] mb-4 rounded-xl'>Test nimaga?</span>
            <ul className='ml-8 mb-4'>
              <li className='text-[25px] font-[500]'>a. Testetion <b>&#x2715;</b></li>
              <li className='text-[25px] font-[500]'>b. Nimadur</li>
              <li className='text-[25px] font-[500] text-green-600'>c. Just Test ) <b>&#x2713;</b></li>
            </ul>
            <div className='w-full p-6 rounded-xl bg-gray-300'>
              <h2 className='text-[30px] font-500'>Transcription</h2>
              <p className='font-[500]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam libero reiciendis minima maiores earum impedit necessitatibus voluptatum commodi iusto cupiditate distinctio beatae enim corporis nobis iste aliquid veritatis, dolor tempora?</p>
            </div>
          </div>

          <div className='mb-10'>
            <span className='text-[35px] font-[500] border-[2px] border-gray-600 border-dashed px-4 py-[4px] mb-4 rounded-xl'>Test nima uchun?</span>
            <ul className='ml-8 mb-4'>
              <li className='text-[25px] font-[500]'>a. Testetion <b>&#x2715;</b></li>
              <li className='text-[25px] font-[500] text-green-600'>b. Just Test ) <b>&#x2713;</b></li>
              <li className='text-[25px] font-[500]'>c. Nimadur</li>
            </ul>
            <div className='w-full p-6 rounded-xl bg-gray-300'>
              <h2 className='text-[30px] font-500'>Transcription</h2>
              <p className='font-[500]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam libero reiciendis minima maiores earum impedit necessitatibus voluptatum commodi iusto cupiditate distinctio beatae enim corporis nobis iste aliquid veritatis, dolor tempora?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}