import React from 'react'

<<<<<<< HEAD
const Stacked = () => {
    return (
        <div>
            
        </div>
    )
}

export default Stacked
=======
import { ChartsHeader, StackedChart } from '../../components'

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Stacked" title="Inflation Rate" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
)

export default Stacked
>>>>>>> d767f27fa0692b48942711f2b8fc259f877d5c4a
