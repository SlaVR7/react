import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchSlice';
import limitReducer from './reducers/limitSlice';
import pagesReducer from './reducers/pagesSlice';
import { productsApi } from '../productsApi';
import productsReducer from './reducers/productSlice';
import loadingReducer from './reducers/loadingSlice';

const rootReducer = combineReducers({
  searchReducer,
  limitReducer,
  pagesReducer,
  productsReducer,
  loadingReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
