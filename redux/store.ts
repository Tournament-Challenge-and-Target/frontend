import { compose, createStore } from 'redux'
import rootReducers from './reducers/reducers'

const enhancers = compose(
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
)

const store = createStore(rootReducers, enhancers)

export default store
