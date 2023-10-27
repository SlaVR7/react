import React, { Component } from 'react';
import CharacterCard from './characterCard';
import MyContext from '../../services/myContext';
import { CharacterData } from '../../interfaces';

class Main extends Component {
  static contextType = MyContext;
  declare context: React.ContextType<typeof MyContext>;

  render() {
    const cardsData = this.context.charactersData;
    const isCardsExist = cardsData!.length !== 0;
    let content;
    if (this.context.isLoading) {
      content = <img src="/src/assets/loading.gif" alt="loader"></img>;
    } else if (isCardsExist) {
      content = cardsData!.map((character: CharacterData, index: number) => (
        <CharacterCard key={index} data={character} />
      ));
    } else {
      content = <div>Ooops! Character does not found</div>;
    }

    return <main>{content}</main>;
  }
}

export default Main;
