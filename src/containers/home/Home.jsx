import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useNavigate } from 'react-router-dom'
import { Auth, ThemeSupa } from '@supabase/auth-ui-react'
import './Home.css'
import { Header, Menu } from '../../containers'
import { Navbar } from '../../components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function Home() {
    

    return (
        <div className="Home">
            <Navbar />
            <Menu />
        </div>
    )
}

export default Home