import React from 'react'
import QuizCard from '../card/quiz-card'

export default function QuizStatistics() {
  return (
    <div className='w-full mb-10'>
        <h1 className='text-[28px] font-[500] mb-8'>Yechilgan Quizlar:</h1>
        <div className='flex flex-wrap gap-10 justify-between items-center'>
            <QuizCard id={12} title={'React Custom Hook Quiz'} describe={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aut aspernatur minima laborum earum nihil.'} />
            <QuizCard id={12} title={'React Router Quiz'} describe={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aut aspernatur minima laborum earum nihil.'} />
            <QuizCard id={12} title={'React route.jsx Quiz'} describe={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aut aspernatur minima laborum earum nihil.'} />
            <QuizCard id={12} title={'React Test Quiz'} describe={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit aut aspernatur minima laborum earum nihil.'} />
        </div>
    </div>
  )
}