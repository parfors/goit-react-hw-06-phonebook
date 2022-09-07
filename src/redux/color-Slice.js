import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   color: '',
// };

const colorSlice = createSlice({
  name: 'color',
  initialState: '',
  reducers: {
    setColor: (_, action) => action.payload,
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
