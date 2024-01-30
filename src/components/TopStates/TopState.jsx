import React from 'react'
import './style.scss'
const TopState = () => {
  return (
    <div className='top-state'>
        <div className='header'>
            <p>Top States</p>
        </div>
        <div style={{width:'17rem'}} className='content'>
            <p className='state'>
                NY
            </p>
            <p className='user'>
                120K
            </p>
        </div>
        <div style={{width:'14.3rem'}} className='content'>
            <p className='state'>
                MA
            </p>
            <p className='user'>
                80
            </p>
        </div>
        <div style={{width:'12.9rem'}} className='content'>
            <p className='state'>
                NH
            </p>
            <p className='user'>
                70K
            </p>
        </div>
        <div style={{width:'9.37rem'}} className='content'>
            <p className='state'>
                OR
            </p>
            <p className='user'>
                50K
            </p>
        </div>
    </div>
  )
}

export default TopState