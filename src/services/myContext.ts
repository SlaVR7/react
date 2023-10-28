import React from 'react';
import { CharacterData } from '../interfaces';
import getCharacters from './getCharacters';

const MyContext = React.createContext<{
  charactersData: CharacterData[] | null;
  updateQuery: (data: CharacterData[] | null) => void;
  updateLoader: (isLoading: boolean) => void;
  isLoading: boolean;
}>({
  charactersData: await getCharacters(localStorage.getItem('term') || ''),
  updateQuery: () => {},
  updateLoader: () => {},
  isLoading: false,
});

export default MyContext;
