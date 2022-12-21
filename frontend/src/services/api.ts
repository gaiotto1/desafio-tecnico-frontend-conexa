import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()
console.info('Cookies: ', cookies.conexaToken)

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.info('status', error.response?.status)

    if (error.response?.status === 403) {
      localStorage.removeItem('username')
      window.location.href = '/login'
    }

    return Promise.reject(error)
  },
)
