import React from 'react'
import './style.scss'
import Graph from '../Graph/Graph'
import Avatar from '../../assets/Avatar5.svg'
const Growth = () => {
  return (
    <div className='growth'>
      <Graph/>
      <div className='metrices'>
        <div className='month'>
          <p className='header'> Top month</p>
          <div className='content'>
            <div>November</div>
            <p>2019</p>
          </div>
        </div>
        <div className='year'>
          <p className='header'> Top year</p>
          <div className='content'>
            <div style={{}}>2023</div>
            <p >96K sold so far</p>
          </div>
        </div>
        <div className='buyer'>
          <p className='header'> Top buyer</p>
          <div className='content'>
            <img src={Avatar} alt='avatar'></img>
            <div >Maggie Johnson</div>
            <p >Oasis Organic Inc.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Growth