import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { ICard } from '../card';
import cardsReducer from './cardsSlice';

export interface AppState {
  cardsStack: {
    cards: Array<ICard>,
    maxCards: number
  };
};    

export const typedUseSelector: TypedUseSelectorHook<AppState> = useSelector;

const store = configureStore({
  reducer: {
    cardsStack: cardsReducer
  }
});

export default store;