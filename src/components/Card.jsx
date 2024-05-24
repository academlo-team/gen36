import React from 'react';
import './styles/card.css';

const Card = ({cardTitle, cardColor}) => {

    const cardStyles = {
        borderColor: cardColor,
    }

    const textStyles = {
        color: cardColor,
    }

  return (
    <article className='card' style={cardStyles}>
        <h2 className='card__header'>Header</h2>
        <h3 className='card__title'>{cardTitle} card title</h3>
        <p className='card__text' style={textStyles}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium dolores officiis facere.</p>
    </article>
  )
}

export default Card;