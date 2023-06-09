import { configureStore } from '@reduxjs/toolkit';
import greeting from './greeting/greetingSlice';

const store = configureStore({

  reducer: greeting,
});

export default store;
