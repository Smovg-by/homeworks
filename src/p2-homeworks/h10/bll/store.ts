import { combineReducers, createStore } from 'redux'
import { loadingReducer } from './loadingReducer'
import { switchThemeReducer } from './switchThemeReducer'

const reducers = combineReducers({
  loading: loadingReducer,
  switchTheme: switchThemeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
