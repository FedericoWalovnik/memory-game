import React from 'react';

import './scss/globalVariables.scss';
import './App.scss';

import Header from './components/header/header.component';
import Board from './components/board/board.component';
import BuildDeck from './utils/buildDeck';

const getInitialState = () => {
  const deck = BuildDeck();
  return {
    deck,
    pairSelected: [],
    comparing: false,
    triesCount: 0
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
      <div>
        <Header
          triesCount={this.state.triesCount}
          resetGame={() => this.resetGame()}
        />
        <Board
          deck={this.state.deck}
          pairSelected={this.state.pairSelected}
          selectCard={(card) => this.selectCard(card)}
        ></Board>
      </div>
    );
  }

  selectCard = (card) => {
    if (
      this.state.comparing ||
      this.state.pairSelected.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }

    const pairSelected = [...this.state.pairSelected, card];
    this.setState({
      pairSelected
    });

    if (pairSelected.length === 2) {
      this.comparePair(pairSelected);
      this.checkForWinner(this.state.pairSelected);
    }
  };

  comparePair(pairSelected) {
    this.setState({ comparing: true });

    setTimeout(() => {
      const [firstCard, secondCard] = pairSelected;
      let deck = this.state.deck;

      if (firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }
          return { ...card, wasGuessed: true };
        });
      }

      this.checkForWinner(deck);
      this.setState({
        pairSelected: [],
        deck,
        comparing: false,
        triesCount: this.state.triesCount + 1
      });
    }, 800);
  }

  checkForWinner = (deck) => {
    if (deck.filter((card) => !card.wasGuessed).length === 0) {
      alert(`You won in ${this.state.triesCount} tries!!`);
    }
  };

  resetGame = () => {
    this.setState(getInitialState());
  };
}

export default App;
