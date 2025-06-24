import { Link } from "react-router-dom";
function CTA() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h3 className="text-3xl font-bold mb-4">Ready to Book Your Test?</h3>
      <p className="mb-6">Join thousands of users today</p>
      <Link to='/book'>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
          Book Now
        </button>
      </Link>
    </section>
  );
}

export default CTA;
