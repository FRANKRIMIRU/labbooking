function SignUp() {
  return (
    <>
      <h1 className="text-center font-semibold m-4">Sign Up</h1>
      <form className="h-screen "  >
        <label htmlFor="name"
        className="block font-medium m-2"
        >Name</label>
        <input
          placeholder="Name"
          type="text"
          className="w-full px-2 py-3 border rounded"
        />
        <label htmlFor="email" className="block font-medium m-2">Email</label>
        <input type="email"
          placeholder="Email"
          className="border rounded px-2 py-3 mb-3  w-full "
        />
        <label htmlFor="password"
        className="block font-medium m-1"
        >Password</label>
        <input type="password"
          placeholder="Password"
        className="w-full border px-2 py-3 "
        />
      
      </form>
    </>
  );
}
export default SignUp;