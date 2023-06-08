import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="images/Ufovisualizerbuilds Screenshot 2023.04.06 - 11.08.12.59.png"
                text="Happy Camper: Unidentified Audio Phenomenon"
                label='Game'
                path='/HC_UAP'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
