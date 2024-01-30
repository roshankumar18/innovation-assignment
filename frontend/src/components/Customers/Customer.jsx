import React from 'react'
import './style.scss'
import ArrowDown from '../../assets/arrowDown.svg'
import Avatar1 from '../../assets/Avatar1.svg'
import Avatar2 from '../../assets/Avatar2.svg'
import Avatar3 from '../../assets/Avatar3.svg'
import Avatar4 from '../../assets/Avatar4.svg'
import RightArrow from '../../assets/rightArrow.svg'
import Chat from '../../assets/chat.svg'
import Star from '../../assets/star.svg'
import Edit from '../../assets/pencil.svg'
import Menu from '../../assets/dots.svg'
const Customer = () => {
  return (
    <div className='customer'>
        <div className='header'>
            <p className='header-text'>
                Customers
            </p>
           <div className='filter'>
            <p>
                Sort by <span>Newest</span> 
            </p>
            <img src={ArrowDown} alt='expand'/>
           </div>
        </div>
        <div className='content'>
            <div className='item'>
                <img src={Avatar1} alt='customer'/>
                <div className='info'>
                    <p className='name'>
                        Chris Friedkly
                    </p>
                    <p className='company'>
                        Supermarket Villanova
                    </p>
                </div>
 
            </div>
            <div className='item' style={{backgroundColor:'#FFF7E8'}}>
                <img src={Avatar2} alt='customer'/>
                <div className='info'>
                    <p className='name'>
                    Maggie Johnson
                    </p>
                    <p className='company'>
                    Oasis Organic Inc.
                    </p>
                </div>
                <div className='hidden hover-items'>
                    <div className='flex align-center' style={{gap:'4px'}}>
                        <button><img src={Chat} alt='hover'/></button>
                    <button><img src={Star} alt='hover'/></button>
                    <button><img src={Edit} alt='hover'/></button>
                    
                    </div>
                    <div className='border'/>
                        <div className='flex align-center'>
                        <button><img src={Menu} alt='hover'/></button>
                        
                    </div>
                </div>
            </div>
            
 
            <div className='item'>
                <img src={Avatar3} alt='customer'/>
                <div className='info'>
                    <p className='name'>
                        Gael Harry
                    </p>
                    <p className='company'>
                        New York Finest Fruits
                    </p>
                </div>
  
            </div>
            <div className='item'>
                <img src={Avatar4} alt='customer'/>
                <div className='info'>
                    <p className='name'>
                        Jenna Sullivan
                    </p>
                    <p className='company'>
                    Walmart
                    </p>
                </div>
   
            </div>
        </div>
        <div className='footer'>
            <p>
                All customers
            </p>
            <div style={{marginTop:'auto'}} className='flex align-center'>
             <img src={RightArrow} alt='goto'/>
            </div>
            
        </div>
    </div>
  )
}

export default Customer