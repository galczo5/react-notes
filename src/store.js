import {createStore} from 'redux';
import { notes } from './reducers';

export const store = createStore(
    notes
);