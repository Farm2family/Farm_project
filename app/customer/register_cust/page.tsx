"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import  "./reg.css"

function page(){
    const router = useRouter();
    
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [mail,setMail]=useState("");
    const [phone,setPhone]=useState("");
    const [areapin,setAreapin]=useState("");
    const [add,setAdd] = useState("");

    const handlereg =async()=>{
        try{
            const res = await axios.post("http://localhost:5000/register_cust",{
                name:name,
                email:mail,
                password:password,
                phone:phone,
                areapin:areapin,
                address:add,
            });
            if(res.data){
                alert("registered successfully");
                router.push("/customer/login");
            }
        }
        catch(err){
            console.log(err);
        }
    }

   return (
  <div className="register-container">
    <div className="register-card">
      <h1>Customer Registration</h1>
      <p>Create your Farm2Family account</p>

      <input
        type="text"
        placeholder="Enter Full Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setMail(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Contact Number"
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter Area Pin Code"
        onChange={(e) => setAreapin(e.target.value)}
      />

      <textarea
        placeholder="Full Address"
        rows={3}
        onChange={(e) => setAdd(e.target.value)}
      ></textarea>

      <button onClick={handlereg}>Register</button>
    </div>
  </div>
);
}
export default page;
