import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoutes() {
  let location = useLocation()

  // TODO: Use authentication token
  const localStorageToken = true
  
  return localStorageToken ? (
    location.pathname === "/" ? <Navigate to="/home" /> : <Outlet />
  ) : (
    <Navigate to="/login" />
  )
}
