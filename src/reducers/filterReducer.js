import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter: (state, action) => {
      return action.payload;
    },
  },
});

const {
  reducer: filterReducer,
  actions: { filter },
} = filterSlice;
export { filterReducer, filter };
