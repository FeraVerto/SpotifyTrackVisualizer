import { configureStore } from '@reduxjs/toolkit';
import { thunk as thunkMiddleware } from 'redux-thunk';
import dataReducerActionsAndReducers from './reducers/dataReducer';

export type StoreType = ReturnType<typeof store.getState>;

export let store = configureStore({
  reducer: {
    data: dataReducerActionsAndReducers.dataReducer.reducer,
  },
  //нужен ли
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;
