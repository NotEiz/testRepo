import React from 'react'
import './card.css';

const Card = (imageUrl,title,subtitle) => {
     return <div>
          <img src={imageUrl} alt="" />
          <h1>{title}</h1>
          <p>{subtitle}</p>
     </div>
};

export default Card