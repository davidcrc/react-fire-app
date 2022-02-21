import React from "react";
import { useAuth } from "../context/auth.context";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = (props) => {
  const user = useAuth()?.user;
  console.log("que hay", user);

  return <div>Home</div>;
};

export default Home;
