import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { PublicRoutes } from "../componets/PublicRoutes";


export const RoutesMain = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PublicRoutes />}>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>
            
           
        </Routes>

    )
}