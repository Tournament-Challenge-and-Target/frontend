import { devToolsEnhancer } from 'redux-devtools-extension'
import { createStore } from 'redux'
import { loadState, saveState } from './sessionStorage'
import rootReducers from './reducers/reducers'

const persistedState = loadState()

const store = createStore(rootReducers, persistedState, devToolsEnhancer({}))

store.subscribe(() => {
  saveState(store.getState())
})

export default store
