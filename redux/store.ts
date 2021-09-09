import { compose, createStore } from 'redux'
import rootReducers from './reducers/reducers'

const enhancers = compose(
  typeof window !== 'undefined' && window.devToolsExtension
    ? window.devToolsExtension()
    : (f) => f
)

const store = createStore(rootReducers, enhancers)

export default store
