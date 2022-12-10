import { createClient } from "@supabase/supabase-js";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useNavigate } from "react-router-dom";
import "./loginPage.css";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function Login() {
    const navigate = useNavigate();

    supabase.auth.onAuthStateChange(async (event) => {
        if (event !== "SIGNED_OUT") {
            navigate("/");
        } else {
            navigate("/");
        }
    });

    return (
        <div className="Login">
            <header className="container">
                <Auth
                    supabaseClient={supabase}
                    appearance= {{ theme: ThemeSupa }}
                    theme = 'dark'
                    providers = {['google', 'github']}
                />
            </header>
        </div>
    );
}

export default Login;