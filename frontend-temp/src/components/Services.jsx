import bloodIcon from "../assets/blood-drop.png"
import covidIcon from "../assets/virus.png"
import urineTest from "../assets/reagent-strip.png"
import { Link } from "react-router-dom";

function Services() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h3 className="text-2xl font-semibold mb-8">Our Lab Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <Link to="/services#blood-test" className="block">
          <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-300 hover:bg-red-200">
            <div className="flex justify-center">
              <img src={bloodIcon} alt="blood test" className="w-26" />
            </div>
            <h4 className="font-bold">Blood Test</h4>
            <p>Accurate and fast blood tests.</p>
          </div>
        </Link>

        <Link to="/services#covid-test" className="block">
          <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-300 hover:bg-green-200">
            <div className="flex justify-center">
              <img src={covidIcon} alt="covid-19 test" className="w-26" />
            </div>
            <h4 className="font-bold">COVID-19 Test</h4>
            <p>RT-PCR and Antigen options available.</p>
          </div>
        </Link>
        <Link to="/services#urine-test" className="block">
          <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition duration-300 hover:bg-yellow-200">
            <div className="flex justify-center">
              <img src={urineTest} alt="urine analysis" className="w-26" />
            </div>
            <h4 className="font-bold">Urine Analysis</h4>
            <p>Detailed urinalysis report.</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Services;
