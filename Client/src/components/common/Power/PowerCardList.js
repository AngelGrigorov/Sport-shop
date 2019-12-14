import React from 'react'
import PowerCard from './PowerCard'

const PowerCardList = (props) => {
  let allProducts = props.products;
  let powerCardList = [];
  for (let i = 0; i < allProducts.length; i += 3) {
    let powerCards = allProducts.slice(i, Math.min(i + 3, allProducts.length))
      .map(p => (
        <PowerCard
          key={p._id}
          id={p._id}
          name={p.name}
          image={p.image}
          description={p.description}
          price={p.price.toFixed(2)}
        />));

    let cardDeck = <div key={i} className='card-deck space-top'>{powerCards}</div>;
    powerCardList.push(cardDeck)
  }

  return (
    <div className='row'>
      {powerCardList}
    </div>
  )
};

export default PowerCardList
