import React from 'react'
import './style.scss'
import Insights from '../Insights/Insights'
import QuarterGaol from '../QuarterGoal/QuarterGaol'
import Customer from '../Customers/Customer'
import Graph from '../Growth/Growth'
import Growth from '../Growth/Growth'
import Chats from '../Chats/Chats'
import TopState from '../TopStates/TopState'
import NewDeals from '../NewDeals/NewDeals'
const insights =[{
  heading:'Revenues',
  percentage:'15%',
  text:'Increase compared to last week',
  navigationText:'Revenues report'
},{
  heading:'Lost Deals',
  percentage:'4%',
  text:'You closed 96 out of 100 deals',
  navigationText:'All deals'
}]
const Main = () => {
  return (
    <div className='main '>
      <div className='main-content'>
        {insights.map(({heading,percentage,text,navigationText})=>(
          <Insights heading={heading} percentage={percentage} about={text} navigationText={navigationText}/>
        ))}
      <QuarterGaol/>
      </div>
      <div className='main-content'>
          <Customer/>
          <Growth/>
      </div>
      <div className='main-content'>
        <Chats/>
        <TopState/>
        <NewDeals/>
      </div>
    </div>
  )
}

export default Main