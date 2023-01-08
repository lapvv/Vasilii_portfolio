import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import AboutMe from '../pages/about_me/AboutMe';
// import ReactPetPage from '../pages/reactPetPage/ReactPetPage';
import Smoothie from "../pages/smoothie/Smoothie.jsx";
import Mogo from "../pages/mogo/Mogo.jsx";

const AppRouter = () => {
    return (
        <Routes>
            {/* <Route path="/" element={<AboutMe />}></Route> */}
            {/* <Route path="/reactpet" element={<ReactPetPage />}></Route> */}
            <Route path="/" element={<Smoothie />}></Route>
            <Route path="/Mogo" element={<Mogo />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
    );
};

export default AppRouter;