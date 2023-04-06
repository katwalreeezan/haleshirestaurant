import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  
  const Navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handlelogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
      
    ) {
      localStorage.setItem("loggedin", true);
     
      
     

      Navigate("/food");
    } else {
      alert("wrong email or password");
    }
  };
  return (
    <div className="max-w-xl mx-auto">
      <div className="md:max-w-[500px] max-w-[370px]  mx-auto border border-black mt-14 rounded-lg">
        <h1 className="uppercase font-semibold text-2xl text-center my-10">
          login
        </h1>
        <form onSubmit={handlelogin}>
          <div className="flex flex-col mx-10 my-10">
            <input
              type="text"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="py-2 border border-black outline-none px-2"
            />
            <span className="">Email</span>
          </div>

          <div className="flex flex-col mx-10 mt-10">
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="py-2 border border-black outline-none px-2"
            />
            <span className="">Password</span>
          </div>
          
          <button  className="mx-auto block my-6">Login</button>
          <div className="text-center my-8">
            Don't have an account{" "}
            <Link to="/register" className="underline font-bold">
              Register here
            </Link>
          </div>
        </form>
      </div>
    
    </div>
  );
};

export default Login;
