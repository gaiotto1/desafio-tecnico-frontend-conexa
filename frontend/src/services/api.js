import axios, { AxiosError } from 'axios'
import { parseCookies } from 'nookies'

const cookies = parseCookies()
console.info('Cookies: ', cookies['conexa.token'])

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: `Bearer ${cookies['conexa.token']}`,
  },
})

/* api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response.status === 401) {
    }

    return Promise.reject(error)
  },
) */
