import { Link } from "react-router-dom";
function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm">
          &copy; {currentYear} LabBooking. All rights reserved.
        </p>

        <nav className="flex space-x-4 mt-3 md:mt-0">
          <Link
            to="/privacy"
            className="hover:underline"
            aria-label="Privacy Policy"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="hover:underline"
            aria-label="Terms and Conditions"
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="hover:underline"
            aria-label="Contact Us"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
