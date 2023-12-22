import { createContext, useState } from 'react'
import { User } from '~/model/user'
import React from 'react'

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthContext = createContext({
  user: {} as User | null,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser: (_: User) => {}
})

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)

  const value = {
    user,
    setUser
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
