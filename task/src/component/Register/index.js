import React from "react";
import axios from "axios";
import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const singup = async () => {
      try{
    console.log("lll");
    const result = await axios.post("http://localhost:4000/regester",{
        email,
        password, 
        role:"61a48ba866acf4f8462bf345"
       
    });
    console.log(result);
}catch (err){
    console.log(err);
}
  };

  return (
    <>
      
        <input  type="email" name="email" placeholder="enter email " onChange={(e)=>{setEmail(e.target.value)
        }} />
        <input type="password" name="password" placeholder="enter password " onChange={(e)=>{
            setPassword(e.target.value) }} />
        <button onClick={singup}>Regester</button>
      

    </>
  );
};

export default Register;
