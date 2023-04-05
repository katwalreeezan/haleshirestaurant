import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handlesubmit = (e) => {
    e.preventDefault();
    if (!input.name || !input.email || !input.password) {
      alert("Empty name or email or password");
      return;
    }
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };
  return (
    <div className="max-w-xl mx-auto">
      <div className="md:max-w-[500px] max-w-[370px] mx-auto border border-black mt-14 rounded-lg">
        <h1 className="uppercase font-semibold text-2xl text-center my-10">
          create an account
        </h1>
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col mx-10 my-10">
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="py-2 border border-black outline-none px-2"
            />
            <span className="">Name</span>
          </div>
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
          <button className="mx-auto block my-6">Register</button>
          <div className="text-center my-8">
            Have already an account{" "}
            <a href="/login" className="underline font-bold">
              Login Here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
