import React from 'react';

import './scss/globalVariables.scss';
import './App.scss';

import Header from './components/header/header.component';
import Board from './components/board/board.component';
import BuildDeck from './utils/buildDeck';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: BuildDeck(),
      pairSelected: [],
      comparing: false
    };
  }

  render() {
    return (
      <div>
        <Header triesCount="20" />
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

    console.log(this.state.pairSelected);
    const pairSelected = [...this.state.pairSelected, card];
    this.setState({
      pairSelected
    });
    console.log(pairSelected);

    if (pairSelected.length === 2) {
      this.comparePair(pairSelected);
      console.log(pairSelected);
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
      this.setState({
        pairSelected: [],
        deck,
        comparing: false
      });
    }, 800);
  }
}

export default App;
