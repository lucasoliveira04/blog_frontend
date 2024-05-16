import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePageUser } from "../pages/Home"

export const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route Component={HomePageUser} path="/" exact/>
            </Routes>
        </BrowserRouter>
    )
}