import { Link } from "react-router-dom";
function Hero() {

  return (
    <section className="bg-blue-50 py-20 text-center">
      <h2 className="text-4xl font-bold mb-4">Book Lab Tests Online, Easily</h2>
      <p className="text-lg mb-6">
        Affordable, Fast, and Reliable Diagnostic Services
      </p>
      <Link to="/book">
      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 border border-blue-600 transition">
        Book Now
      </button>
      </Link>
      
    </section>
  );
}

export default Hero;
