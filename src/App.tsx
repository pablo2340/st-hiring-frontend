import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import EventList from './components/EventList';
import SettingsForm from './components/SettingsForm';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Events</h1>
        <EventList />
        <h2>Settings</h2>
        <SettingsForm clientId={1} />
      </div>
    </Provider>
  );
};

export default App;
