import { createSlice } from '@reduxjs/toolkit';
import { fetchEvents, fetchSettings, updateSettings } from './actions';
import { Event, Settings } from '../types';

const eventsSlice = createSlice({
  name: 'events',
  initialState: [] as Event[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => action.payload);
  },
});

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {} as Settings,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSettings.fulfilled, (state, action) => action.payload);
    builder.addCase(updateSettings.fulfilled, (state, action) => action.payload);
  },
});

export default eventsSlice.reducer;
export const eventsReducer = eventsSlice.reducer;
export const settingsReducer = settingsSlice.reducer;
