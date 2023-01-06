import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopBar from '../components/topbar/TopBar'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Settings from '../pages/settings/Settings'
import Single from '../pages/single/Single'
import Write from '../pages/write/Write'

export default function Index() {
    const user = false;
    return (
        <BrowserRouter>
            <TopBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
            <Routes>
                <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
                <Route path="/login" element={<Login />} />
            </Routes>
            <Routes>
                <Route path="/settings" element={<Settings />} />
            </Routes>
            <Routes>
                <Route path="/write" element={<Write />} />
            </Routes>
            <Routes>
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </BrowserRouter>
    )
}
