import { useAuth } from "@/context/AuthContext";
import {Navigate} from 'react-router-dom'

function ProtectedRoutes({children}) {
    const { user } = useAuth()
    if (!user) return <Navigate to="/" />
    return children
}

export default ProtectedRoutes