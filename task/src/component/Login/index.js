import React from 'react'
import axios from "axios";
import { useState } from "react";

const Login = () => {
 const BASE_URL = process.env.REACT_APP_BASE_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/login`, {
        email,
        password
      });
      console.log(result.data.token);
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div>
            <>hi login </>
            <input
        type="email"
        name="email"
        placeholder="enter email "
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="enter password "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
        </div>
    )
}

export default Login
