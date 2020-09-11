import React from 'react';

import './board.styles.scss';

import Card from '../card/card.components';

const Board = ({ deck, pairSelected, selectCard }) => {
  return (
    <div className="board">
      {deck.map((card, index) => {
        const isBeingCompared = pairSelected.indexOf(card) > -1;
        return (
          <Card
            key={index}
            index={index}
            icon={card.icon}
            isBeingCompared={isBeingCompared}
            selectCard={() => selectCard(card)}
            wasGuessed={card.wasGuessed}
          />
        );
      })}
    </div>
  );
};

export default Board;
