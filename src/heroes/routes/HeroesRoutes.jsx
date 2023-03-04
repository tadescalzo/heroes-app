import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../../auth/pages/LoginPage"
import { Navbar } from "../../ui/components/Navbar"
import { Dc } from "../pages/Dc"
import { HeroPage } from "../pages/HeroPage"
import { Marvel } from "../pages/Marvel"
import { SearchPage } from "../pages/SearchPage"

export const HeroesRoutes = () => {
  return (
    <>
    <Navbar />
    <div className="container">
    <Routes>
      <Route path="dc" element={ <Dc /> }/>
      <Route path="marvel" element={ <Marvel /> } />
      <Route path="login" element={ <LoginPage /> } />
      <Route path="search" element={ <SearchPage /> } />
      <Route path="hero" element={ <HeroPage /> } />
      <Route path="/" element={ <Navigate to='/marvel' /> } />
    </Routes>
    </div>
    </>
  )
}
