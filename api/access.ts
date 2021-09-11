import axios from 'axios'
import { config } from './config'

type PromiseType = {
  data: Record<string, any>
}

type loginType = { username: string; password: string }

export const login = (login: loginType): Promise<PromiseType> =>
  axios.post(`${config.URL}/api/login`, login)

export const register = (register: loginType): Promise<PromiseType> =>
  axios.post(`${config.URL}/user/register`, register)
