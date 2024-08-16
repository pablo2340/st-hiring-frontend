import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from './reducers/eventsReducer';
import settingsReducer from './reducers/settingsReducer';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    settings: settingsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
