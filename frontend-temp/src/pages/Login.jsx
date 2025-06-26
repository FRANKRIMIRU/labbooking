import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/v1/auth/sign-in", { email, password })
      .then(res => {
        alert(res.data.message);
        navigate('/')
      })
    .catch(err => ({error:err.message}))
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1"
        >Email</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded"
          onChange={e => setEmail(e.target.value)}
        />
        
       <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="w-full mb-4 px-3 py-2 border rounded"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
        <p className="">
          Don't have an account?
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </>
  );
}
export default Login;