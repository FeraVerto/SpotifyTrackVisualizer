import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  musicData: {},
};

type StateType = typeof initialState;
type ActionType = any;

const dataReducer = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData(state: StateType, action: ActionType) {},
  },
});

// export const { getData } = dataReducer.actions;

const dataReducerActionsAndReducers = {
  dataReducer,
};

export default dataReducerActionsAndReducers;
