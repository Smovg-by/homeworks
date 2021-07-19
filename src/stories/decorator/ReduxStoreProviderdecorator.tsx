
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { loadingReducer } from "../../p2-homeworks/h10/bll/loadingReducer";
import { AppStoreType } from "../../p2-homeworks/h10/bll/store";
import { switchThemeReducer } from "../../p2-homeworks/h10/bll/switchThemeReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  switchTheme: switchThemeReducer
})

const initialGlobalState: AppStoreType = {
  loading: {
    isLoading: false
  },
  switchTheme: {
    currentTheme: 'dark'
  }
}

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppStoreType);

export const ReduxStoreProviderDecorator = (storyFn: any) => {
  return <Provider store={storyBookStore}>{storyFn()}</Provider>
}