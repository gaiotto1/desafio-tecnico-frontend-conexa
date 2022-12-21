import { useState, createContext, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { setCookie } from 'nookies'

import { api } from '../services/api'

type User = {
  name: string
  email: string
}

type SignInCredentials = {
  email: string
  password: string
}

type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>
  user: User | undefined
  isAuthenticated: boolean
}

type AuthProviderProps = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>()
  const isAuthenticated = !!user

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('/login', {
        email,
        password,
      })

      const { name, token } = response.data

      setCookie(undefined, 'conexa.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
      })

      setUser({
        name,
        email,
      })

      localStorage.setItem('name', name)

      navigate('/')

      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  )
}
