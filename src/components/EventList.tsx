import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../redux/actions';
import { RootState } from '../redux/store';
import { List, ListItem, ListItemText } from '@mui/material';

const EventList: React.FC = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <List>
      {events.map((event) => (
        <ListItem key={event.id}>
          <ListItemText primary={event.name} secondary={event.date} />
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;