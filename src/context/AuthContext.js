import { createContext, useContext } from 'react'
const authContext = createContext()
export const AuthProvider = ({ children }) => {
  const createUser = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
  }

  const getUser = () => {
    return JSON.stringify(localStorage.getItem('users'))
  }

  return <authContext.Provider value={{ createUser: createUser, getUser: getUser }}>
    {children}
  </authContext.Provider>
}

export const useUser = () => {
  return useContext(authContext)
}