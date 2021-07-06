type RootStateType = {
  isLoading: boolean
}

const initState: RootStateType = {
  isLoading: false
}

export const loadingReducer = (
  state = initState,
  action: ActionType
): RootStateType => {
  // fix any
  switch (action.type) {
    case 'TOGGLE_IS_LOADING': {
      return { ...state, isLoading: action.isLoading }
    }
    default:
      return state
  }
}

const TOGGLE_IS_LOADING: 'TOGGLE_IS_LOADING' = 'TOGGLE_IS_LOADING'

type SetToggleIsLoadingType = {
  type: 'TOGGLE_IS_LOADING'
  isLoading: boolean
}

type ActionType = SetToggleIsLoadingType

export const loadingAC = (isLoading: boolean): SetToggleIsLoadingType => {
  return {
    type: TOGGLE_IS_LOADING,
    isLoading
  }
} // fix any
