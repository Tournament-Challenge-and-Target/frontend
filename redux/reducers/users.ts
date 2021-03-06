import initialState from '../initialState'

const users = (state: any = initialState.users, action: any): any => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

export default users
