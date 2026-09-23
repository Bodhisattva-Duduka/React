import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {

    const { userStatus } = useContext(UserContext);

    if(!userStatus){
        return <Navigate to="/login" />
    }

  return (
    <Outlet/>
  )
}

export default ProtectedRoute