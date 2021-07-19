export type currentThemeType = 'dark' | 'red' | 'some' | 'green' | 'yellow'

type RootStateType = {
  currentTheme: currentThemeType
}

const initState: RootStateType = {
  currentTheme: 'dark'
}

export const switchThemeReducer = (
  state = initState,
  action: ActionType
): RootStateType => {

  switch (action.type) {
    case 'SWITCH_THE_THEME': {
      return { ...state, currentTheme: action.currentTheme }
    }
    default:
      return state
  }
}

const SWITCH_THE_THEME: 'SWITCH_THE_THEME' = 'SWITCH_THE_THEME'

type switchThemeType = {
  type: 'SWITCH_THE_THEME'
  currentTheme: currentThemeType
}

type ActionType = switchThemeType

export const switchThemeAC = (currentTheme: currentThemeType): switchThemeType => {
  return {
    type: SWITCH_THE_THEME,
    currentTheme
  }
}
