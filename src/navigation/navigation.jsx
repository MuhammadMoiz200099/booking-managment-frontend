import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "../protectedRoutes/protectedRoutes";
//containers
import Dashboard from '../containers/dashboard/dashboard';
import LoginContainer from '../containers/login/login';
import SignupContainer from '../containers/signup/signup';
import CreateBooking from '../containers/createBooking/createBooking';
import History from '../containers/history/history';
import MyBooking from '../containers/myBooking/myBooking';
//components
import NotFound from "../components/notfound/notfound";
import BaseComponent from '../components/baseLayout/baseLayout';

const Navigation = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Routes>
            <Route path="/booking" element={<BaseComponent />}>
                <Route index path="home" element={<ProtectedRoute isLoggedIn={user}> <Dashboard /></ProtectedRoute>} />
                <Route index path="create" element={<ProtectedRoute isLoggedIn={user}> <CreateBooking /></ProtectedRoute>} />
                <Route index path="history" element={<ProtectedRoute isLoggedIn={user}> <History /></ProtectedRoute>} />
                <Route index path="scheduled" element={<ProtectedRoute isLoggedIn={user}> <MyBooking /></ProtectedRoute>} />
            </Route>
            <Route path="/login" element={<LoginContainer />} />
            <Route path="/signup" element={<SignupContainer />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Navigate to="/booking/home" />} />
            <Route path="/booking" element={<Navigate to="/booking/home" />} />
        </Routes>
    )
}

export default Navigation;