import { devToolsEnhancer } from 'redux-devtools-extension'
import { createStore } from 'redux'
import rootReducers from './reducers/reducers'

const store = createStore(rootReducers, devToolsEnhancer({}))

export default store
