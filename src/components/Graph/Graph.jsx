import React, { useEffect, useState } from 'react'
import ArrowDown from '../../assets/arrowDown.svg'
import './style.scss'
import LineChart from '../LineChart/LineChart'

const Graph = () => {
  const [result,setResult] = useState(null)
  useEffect(()=>{
    fetch('http://127.0.0.1:3001/').then(res=>res.json())
      .then((res)=>setResult(res))
      .catch(err=>console.log(err))
    
    
  },[])
  useEffect(()=>{
    console.log(result)
  },[result])

  return (
    <div className='graph'>
      <div className='header'>
       <p >Growth</p> 
       <div className='filter'>
        Yearly
        <div className='icon'>
          <img src={ArrowDown} alt='downArrow'/>
        </div>
       </div>
      </div>
      <div>
      <LineChart data={result}/>
      </div>
      
    </div>
  )
}

export default Graph