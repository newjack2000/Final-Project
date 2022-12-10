import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import { MdSpaceDashboard } from 'react-icons/Md';
import './navbar.css'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import Login from '../../supabase/login/loginPage'
import Welcome from '../../containers/welcome/Welcome'

const Navbar = () => {
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        async function getUserData({}) {
            await supabase.auth.getUser().then((value) => {
                // if value.data.user
                if (value.data?.user) {
                    console.log(value.data.user)
                    setUser(value.data.user);
                }
            });
        }
        getUserData();
    }, []);

    async function signOutUser() {
        const { error } = await supabase.auth.signOut();
        navigate("/welcome"); 
    }
  return (
    <div className="sidebar">

        <div className="logo">
            <img src="src/assets/Ivytech.png" alt="..."></img>
        </div>

        { Object.keys(user).length !== 0 ?
            <>
                <button onClick = {() => signOutUser() }>Logout</button>
            </>
        :
            <>
                <button onClick = {() => { navigate('/login') }}>Login</button>
            </>
        }

        <nav>

            <div className="nav-title">
                Management
            </div>

            <ul>
                <li className="nav-item active">
                    <i className="bx bxs-dashboard"><MdSpaceDashboard /></i>
                    <span>Dashboard</span>
                </li>
                <li className="nav-item">
                    <i className="bx bxs-bar-chart-alt-2"><MdSpaceDashboard /></i>
                    <span>Analytics</span>
                </li>
                <li className="nav-item">
                    <i className="bx bxs-wallet"><MdSpaceDashboard /></i>
                    <span>Wallet</span>
                </li>
                <li className="nav-item">
                    <i className="bx bxs-bell"><MdSpaceDashboard /></i>
                    <span>Notifications</span>
                </li>
                <li className="nav-item">
                    <i className="bx bxs-cog"><MdSpaceDashboard /></i>
                    <span>Settings</span>
                </li>
            </ul>

            <div className="nav-title">
                Supports
            </div>

            <ul>
                <li className="nav-item">
                    <i className="bx bxs-help-circle"></i>
                    <span>Get Help</span>
                </li>
                <li className="nav-item">
                    <i className="bx bxs-message-dots"></i>
                    <span>Send Feedback</span>
                </li>
            </ul>

        </nav>

    </div>
  )
}

export default Navbar