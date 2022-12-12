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
    <nav className="sidebar">
        <div className='container'>
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
            <div className='Nav-Item-Container'>
                <ul className='Nav-Items'>
                    <li className="nav-item">
                        <i className="bx bxs-dashboard"><MdSpaceDashboard /></i>
                        <span>Home</span>
                    </li>
                    <li className="nav-item">
                        <i className="bx bxs-bar-chart-alt-2"><MdSpaceDashboard /></i>
                        <span>Order</span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar