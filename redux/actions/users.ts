interface IAction {
  type: string
  payload?: any
}

export const userLogin = (payload: any): IAction => ({
  type: 'USER_LOGIN',
  payload,
})
