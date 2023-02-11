import React from 'react'

<<<<<<< HEAD
const Line = () => {
    return (
        <div>
            
        </div>
    )
}

export default Line
=======
import { ChartsHeader, LineChart } from '../../components'

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
)

export default Line
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
