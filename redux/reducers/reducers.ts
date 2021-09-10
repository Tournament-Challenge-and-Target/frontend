import { combineReducers } from 'redux'
import users from './users'
import app from './app'

const rootReducer = combineReducers({
  users,
  app,
})

export default rootReducer
