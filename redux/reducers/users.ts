import initialState from '../initialState'

const users = (state: any = initialState.users, action: any): any => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default users
