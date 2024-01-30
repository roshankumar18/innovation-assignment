import React from 'react'
import './styles.scss'
import Avatar1 from '../../assets/Rectangle1.svg'
import Avatar2 from '../../assets/Rectangle2.svg'
import Avatar3 from '../../assets/Rectangle3.svg'
import Avatar4 from '../../assets/Rectangle4.svg'
const Chats = () => {
  return (
    <div className='chats'>
        <div className='header' >
            <p className='heading'>
                Chats
            </p>
            <p className='sub-heading'>
                2 unread messages
            </p>
        </div>
        <div className='content'>
            <div style={{backgroundColor:'#FFF7E8'}}>
                <img src={Avatar4}  alt='avatar'/>
            </div>
            <div style={{backgroundColor:'#FFF7E8'}}>
                <img src={Avatar1}  alt='avatar'/>
            </div>
            <div>
                <img src={Avatar2} alt='avatar'/>
            </div>
            <div>
                <img src={Avatar3} alt='avatar'/>
            </div>
        </div>
    </div>
  )
}

export default Chats