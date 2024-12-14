import { onAuthStateChanged, signOut } from 'firebase/auth'
import {auth} from '../firebase'
import { useState,useContext,useEffect,createContext } from 'react'
const AuthContext = createContext()

export  function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)

            return () => unsubscribe()
        }, [])
    })
    async function logout() {
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user,logout }} >
            { children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
  return useContext(AuthContext)  
}