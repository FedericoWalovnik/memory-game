import React from 'react';

import './card.styles.scss';

import ReactCardFlip from 'react-card-flip';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <ReactCardFlip
          isFlipped={this.props.wasGuessed || this.props.isBeingCompared}
          className="card__flipcard"
        >
          <div className="card__front" onClick={this.props.selectCard}>
            {' '}
          </div>
          <div className="card__back">
            <i className={`fa ${this.props.icon} fa-5x card__icon`}></i>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;
