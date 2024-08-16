import axios from 'axios';
import { Event } from '../types';

export const fetchEvents = () => axios.get<Event[]>('/events');
