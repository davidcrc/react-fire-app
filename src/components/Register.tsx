import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth.context";

const Register: React.FunctionComponent = () => {
  const signUp = useAuth()?.signUp;
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const handleChange = (e: any) => {
  //   console.log(e.target.value);
  // };

  const handleChange = ({ target: { name, value } }: any) => {
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    // console.log(e);
    console.log("whatt", user.email, user.password);
    try {
      await signUp(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form action="">
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" placeholder="email@example.com" onChange={handleChange} />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" onChange={handleChange} />

      <button onClick={handleSubmit}> Register</button>
    </form>
  );
};

export default Register;
