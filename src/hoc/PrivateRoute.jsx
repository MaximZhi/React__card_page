import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../MyCustomHooks/useAuth";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, password} = useAuth()

    if(!user || !password){
        return <Navigate to ='/login' state={{from: location}}/>
    }

    return children
}
export {PrivateRoute}