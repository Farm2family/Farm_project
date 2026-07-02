"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "./login.css";

function page() {
    const router = useRouter();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");


    const handle = async () => {
        try {
            const res = await axios.post("http://localhost:5000/farmer/login", {
                email: mail,
                password: password
            });
            if (res.data && res.data.success) {
                console.log(res.data.token);
                localStorage.setItem("token", res.data.token);
                alert("data sen");
                router.push("/farmer/dashboard");
            }
        }
        catch (err) {
            console.log(err.response?.data);
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">Farmer Login</h2>

                <input
                    className="login-input"
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => setMail(e.target.value)}
                />

                <input
                    className="login-input"
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login-btn" onClick={handle}>
                    Login
                </button>

                <div className="register-text">
                    Don't have an account?{" "}
                    <a href="/register" className="register-link">
                        Register Here
                    </a>
                </div>
            </div>
        </div>
    );
} export default page;