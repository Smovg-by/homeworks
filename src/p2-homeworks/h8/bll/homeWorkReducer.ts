import { UserType } from '../HW8'

type ActionType = {
  type: 'sort' | 'check'
  payload: 'up' | 'down' | number
}

export const homeWorkReducer = (
  state: Array<UserType>,
  action: ActionType
): Array<UserType> => {
  // need to fix any
  switch (action.type) {
    case 'sort': {
      switch (action.payload) {
        case 'up':
          return (state = [
            ...state.sort((a, b) => (a.name <= b.name ? -1 : 1))
          ])
        case 'down':
          return (state = [
            ...state.sort((a, b) => (a.name >= b.name ? -1 : 1))
          ])
        default:
          return state
      }
    }
    case 'check': {
      return (state = [...state.filter(item => item.age >= action.payload)])
    }
    default:
      return state
  }
}
