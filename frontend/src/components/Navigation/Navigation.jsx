import React from 'react'
import './style.scss'
import Logo from '../../assets/Logomark.svg'
import Seacrh from '../../assets/searchLogo.png'
import navigation from '../../constants/navigation'
import Avatar from '../../assets/Avatar.svg'
import Setting from '../../assets/settings.svg'
import Logout from '../../assets/logout.svg'
import Closed from '../../assets/Closed.svg'
import Arrow from '../../assets/arrowDown.svg'
const Navigation = () => {
  return (
    <nav className='nav flex flex-col'>
        <div className='flex logo'>
            <img className='' src={Logo} alt='logo'/>
            <div>OrangeFarm</div>
        </div>
        <div className='items'>
            <div className='search-item'>
                <div className='search flex'>
                    <div className='flex align-center'>
                        <img  src={Seacrh} alt='Search'/>
                    </div>
                    
                    <input placeholder='Search'/>
                </div>
            </div>
            {
                navigation.map((item)=>(
                    <div style={{marginTop:'0.5rem'}}>
                        <div className='item flex'>
                            <div className='flex align-center'>
                                <img src={item.icon} alt={`${item}-item`}/>
                            </div>
                            <div className='item-text'>{item.name}</div>
                            {item.name==='Customers' && 
                            <div style={{marginLeft:'auto',marginRight: '20px' ,display:'flex',alignItems:'center'}}>
                                <img src={Closed} alt='closed'/>
                                </div>}
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='profile'>
            <div className='icon'>
                <img src={Arrow} alt='collapse'/>
            </div>
            <div className='user'>
                <img src={Avatar} alt='avatar'/>
                <div className='info'>
                    <p className='name'>Gustavo Xavier</p>
                    <span className='access'>Admin</span>
                </div>
            </div>
            <div className='menu'>
                <div className='settings'>
                    <img src={Setting} alt='settings'/>
                    <p>Settings</p>
                </div>
                <div className='logout'>
                <img src={Logout} alt='logout'/>
                    <p>Logout</p>
                </div>
            </div>
        </div>
       
    </nav>
  )
}

export default Navigation