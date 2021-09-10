import initialState from '../initialState'

const app = (state: any = initialState.app, action: any): any => {
  switch (action.type) {
    case 'TOGGLE_IS_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      }
    default:
      return state
  }
}

export default app
