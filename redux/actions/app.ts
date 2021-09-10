interface IAction {
  type: string
  payload?: any
}

export const isLoading = (payload: boolean): IAction => ({
  type: 'TOGGLE_IS_LOADING',
  payload,
})
