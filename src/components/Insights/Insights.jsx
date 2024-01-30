import React from 'react'
import './style.scss'
import Arrow from '../../assets/arrow.svg'
import RightArrow from '../../assets/rightArrow.svg'
const Insights = ({heading,percentage,about,navigationText}) => {
  return (
    <div className='revenue'>
        <div style={{paddingBottom:'1rem',minWidth:'22.6rem',flexGrow:1}}> 
            <p className='revenue-text'>{heading}</p>
        </div>
        
        <div className='flex'>
            <p className='increment'>{percentage}</p>
            {heading==='Revenues' &&
              <img style={{marginLeft:'0.5rem',marginBottom:'0.75rem',marginTop:'0.875'}} 
                src={Arrow} alt='arrow'></img>}
        </div>
        <p className='text'>{about}</p>
        <div className='report'>
            <p>{navigationText}</p>
            <img src={RightArrow} alt='goto'/>
        </div>
    </div>
  )
}

export default Insights