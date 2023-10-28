import { ChangeEvent, ReactNode } from 'react';

export interface HeaderProps {
  inputValue: string;
}

export interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface SearchButtonProps {
  text: string;
}

export interface PokemonData {
  name: string;
  effect_entries: [
    {
      effect: string;
    },
    {
      effect: string;
    },
  ];
}

export interface CharacterData {
  name: string;
  species: string;
  status: string;
  location: {
    name: string;
  };
  episode: string[];
  image: string;
  gender: string;
}

export interface ChracterCardProps {
  data: CharacterData | null;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
}

export interface ImageComponentProps {
  src: string;
  alt: string;
}

export interface ImageComponentState {
  imageLoaded: boolean;
}
