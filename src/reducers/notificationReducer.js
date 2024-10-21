import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notification: (state, { payload: message }) => {
      return message;
    },
    removeNotification: () => null,
  },
});
const {
  reducer: notificationReducer,
  actions: { notification, removeNotification },
} = notificationSlice;
export { notificationReducer, notification, removeNotification };
