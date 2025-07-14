import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import LabServices from "./pages/LabServices.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import Book from "./pages/Book.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<LabServices />}></Route>
          <Route path="/book" element={<Book />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/admin-dashboard" element={user?.role === "admin"?<AdminDashboard />: <Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
