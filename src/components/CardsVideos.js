import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function CardsVideos() {
  return (
    <div className='cards'>
      <h1></h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItem 
                src="images\Ufovisualizerbuilds Screenshot 2023.03.08 - 19.15.31.56.png"
                text="Party Up - DMX"
                label='GamePlay'
                path='/Trailer4'
                />
                
            </ul>
        </div>
      </div>
    </div>
  )
}

export default CardsVideos
