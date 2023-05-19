import { createContext, useContext, useState } from 'react'
const authContext = createContext()
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const createUser = (newUser) => {
    setUser(newUser)
  }
  return <authContext.Provider value={{ user: user, createUser: createUser }}>
    {children}
  </authContext.Provider >
}

export const useUser = () => {
  return useContext(authContext)
}