import { Routes, Route } from "react-router-dom";
import Missing from "./Pages/MissingPage/Missing";
import Signup from "./Pages/AuthPages/Signup";
import Login from "./Pages/AuthPages/Login";
import Home from "./Pages/HomePage/Home";
import PrivateRoute from "./Utils/PrivateRoute";
import ForgotPassword from "./Pages/AuthPages/ForgotPassword";
import Landing from "./Pages/LandingPage/Landing";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route element={<PrivateRoute />}>
                <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="*" element={<Missing />} />
        </Routes>
    );
};

export default Router;
