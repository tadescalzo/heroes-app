import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../auth/pages/LoginPage"
import { Dc } from "../heroes/pages/Dc"
import { Marvel } from "../heroes/pages/Marvel"
import { Navbar } from "../ui/components/Navbar"

export const AppRouter = () => {
  return (
    <>

      <Navbar/>

      <Routes>
      <Route path="dc" element={ <Dc /> }/>
      <Route path="marvel" element={ <Marvel /> } />
      <Route path="login" element={ <LoginPage /> } />
      <Route path="/" element={ <Navigate to='/marvel' /> } />
      </Routes>
    </>
  )
}
