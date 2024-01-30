import React from 'react'
import './style.scss'
import Add from '../../assets/add.svg'

const deals = ["Fruit2Go","Marshall's MKT","CCNT",
"Joana Mini-market","Little Brazil Vegan","Target",
"Organic Place","Morello's"]
const NewDeals = () => {
  return (
    <div className='new-deals'>
        <div className='header'>
            <p>New Deals</p>
        </div>
        <div className='content'>
            {deals.map((deal)=>(
                <div className='item'>
                    <img src={Add} alt='add'/>
                    <p>{deal}</p>
                </div>
            ))}
          
            
        </div>
    </div>
  )
}

export default NewDeals