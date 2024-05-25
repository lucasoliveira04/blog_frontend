import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePageUser } from "../pages/Home"
import { ProfilePage } from "../pages/Profile"

export const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route Component={HomePageUser} path="/" exact/>
                <Route Component={ProfilePage} path="/profile" exact/>
            </Routes>
        </BrowserRouter>
    )
}