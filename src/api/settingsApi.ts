import axios from 'axios';
import { Settings } from '../types';

export const fetchSettings = (clientId: number) => axios.get<Settings>(`/settings/${clientId}`);
export const updateSettings = (clientId: number, settings: Settings) => axios.put<Settings>(`/settings/${clientId}`, settings);
