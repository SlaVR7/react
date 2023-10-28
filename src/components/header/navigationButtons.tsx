import React, { Component } from 'react';
import { CharacterData, SearchButtonProps } from '../../interfaces';
import myContext from '../../services/myContext';
import MyContext from '../../services/myContext';
import getCharacters from '../../services/getCharacters';

class NavigationButtons extends Component<SearchButtonProps> {
  static contextType = myContext;
  declare context: React.ContextType<typeof MyContext>;

  componentDidMount() {
    this.handleSearch();
  }

  getError = () => {
    this.context.updateQuery(null);
  };

  handleSearch = async () => {
    this.context.updateLoader(true);
    const newState: CharacterData[] = await getCharacters(this.props.text);
    this.context.updateLoader(false);
    this.context.updateQuery(newState);
    localStorage.setItem('term', this.props.text);
  };

  render() {
    return (
      <>
        <button className={'header-button'} onClick={this.handleSearch}>
          Search
        </button>
        <button className={'header-button'} onClick={this.getError}>
          Get an error
        </button>
      </>
    );
  }
}

export default NavigationButtons;
