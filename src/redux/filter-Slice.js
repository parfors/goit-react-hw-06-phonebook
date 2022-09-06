import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

const persistConfig = {
  key: 'filter',
  storage,
};

const persistedFilterSlice = persistReducer(persistConfig, filterSlice.reducer);

export default persistedFilterSlice;
