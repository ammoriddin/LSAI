import React from 'react'
import StatisticsLine from '../../components/statistics/statistics-line'
import QuizStatistics from '../../components/statistics/quiz-statistics'

export default function Statistics() {
  return (
    <section>
        <div className='container'>
            <StatisticsLine />
            <QuizStatistics />
        </div>
    </section>
  )
}