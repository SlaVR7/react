import React, { Component } from 'react';
import Header from './components/header/header';
import MainSection from './components/body/mainSection';
import { CharacterData } from './interfaces';
import MyContext from './services/myContext';
import ErrorBoundary from './components/addition/errorBoundary';

class App extends Component {
  updateQuery = (charactersData: CharacterData[] | null) => {
    this.setState({
      charactersData: charactersData || null,
      updateQuery: this.updateQuery,
    });
  };

  updateLoader = (isLoading: boolean) => {
    this.setState({
      isLoading: isLoading,
    });
  };

  state = {
    charactersData: [],
    updateQuery: this.updateQuery,
    isLoading: false,
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          charactersData: this.state.charactersData,
          updateQuery: this.state.updateQuery,
          updateLoader: this.updateLoader,
          isLoading: this.state.isLoading,
        }}
      >
        <ErrorBoundary>
          <Header />
          <MainSection />
        </ErrorBoundary>
      </MyContext.Provider>
    );
  }
}

export default App;
