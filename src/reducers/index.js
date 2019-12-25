import { combineReducers } from 'redux'

import { persons } from './persons'
import { loading } from './loading'


export const rootReducer = combineReducers({
 loading: loading,
 data: persons
})