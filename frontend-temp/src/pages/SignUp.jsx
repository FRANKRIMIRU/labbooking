import { useState } from "react";
import axios from "axios";

function SignUp() {
  const{name,setName}= useState()
  const{email,setEmail}= useState()
  const { password, setPassword } = useState()
  
  const Submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/createUser', { name, email, password })
      .then(res => console.log(res)
       .catch(err => console.log(err))
   )

}

  return (
    <>
      <h1 className="text-center font-semibold m-4">Sign Up</h1>
      <form className="h-screen " onSubmit={Submit}>
        <label htmlFor="name" className="block font-medium m-2">
          Name
        </label>
        <input
          placeholder="Name"
          type="text"
          className="w-full px-2 py-3 border rounded"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="block font-medium m-2">
          Email
        </label>
        <input
          type="email"
          placeholder="Email"
          className="border rounded px-2 py-3 mb-3  w-full "
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="block font-medium mb-3">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          className="w-full border px-2 py-3 mb-3 "
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full border px-2 py-3 bg-blue-600 text-white  ">Submit</button>
      </form>
    </>
  );
}
export default SignUp;