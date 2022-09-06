import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  color: '',
};

const colorSlice = createSlice({
  name: 'color',
  initialState: initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;

const persistConfig = {
  key: 'color',
  storage,
};

const persistedColorSlice = persistReducer(persistConfig, colorSlice.reducer);

export default persistedColorSlice;
