import { createStore } from 'redux'
import { lowAppReducer } from './reducer'
 

export const store = createStore(lowAppReducer)