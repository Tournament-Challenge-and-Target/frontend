import axios from 'axios'
import { config } from './config'
// This file have functions to access the Application

type PromiseType = {
  data: Record<string, any>
}

type loginType = { username: string; password: string }

export const login = (login: loginType): Promise<PromiseType> =>
  axios.post(`${config.URL}/login`, login)
