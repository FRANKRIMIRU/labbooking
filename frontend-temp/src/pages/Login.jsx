import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <form>
        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1"
        >Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 px-3 py-2 border rounded"
        />
        
       <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
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