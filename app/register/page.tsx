 "use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import "./register.css";
 function page(){
    const router = useRouter();
    
    const [name,setName]=useState("");
    const [password, setPassword]= useState("");
    const [phone,setPhone]=useState("");
    const [mail,setMail]=useState("");
    const [add,setAdd]=useState("");
    const [apin,setApin]=useState("");

    const handle = async()=>{
        try{
            const res = await  axios.post("http://localhost:5000/register",{
                name : name,
                password:password,
                phone :phone,
                email:mail,
                address:add,
                apin:apin
            });
            if(res.data ){
                alert("registerd successfully");
                router.push("/farmer/login");
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Farmer Registration</h2>

        <input
          className="register-input"
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="register-input"
          type="Number"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          className="register-input"
          type="email"
          placeholder="Email"
          onChange={(e) => setMail(e.target.value)}
        />

        <input
          className="register-input"
          type="text"
          placeholder="Address"
          onChange={(e) => setAdd(e.target.value)}
        />

        <input
          className="register-input"
          type="text"
          placeholder="Area Pin"
          onChange={(e) => setApin(e.target.value)}
        />

        <input
          className="register-input"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="register-btn" onClick={handle} >
          Register
        </button>
      </div>
    </div>
  );

 }
export default page;
