import bloodIcon from "../assets/blood-drop.png";
import covidIcon from "../assets/virus.png";
import urineTest from "../assets/reagent-strip.png";

function LabServices() {
  return (
    <>
      
      <section className="py-16 px-4 bg-gray-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Our Lab Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            id="blood-test"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-red-100 transition"
          >
            <img
              src={bloodIcon}
              alt="Blood Test"
              className="w-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-xl mb-2">Blood Test</h4>
            <p>
              Get accurate blood analysis for routine check-ups, infections, and
              chronic conditions.
            </p>
          </div>

          <div
            id="covid-test"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 transition"
          >
            <img
              src={covidIcon}
              alt="COVID-19 Test"
              className="w-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-xl mb-2">COVID-19 Test</h4>
            <p>
              We offer rapid Antigen and RT-PCR tests with certified results for
              travel and health checks.
            </p>
          </div>

          <div
            id="urine-test"
            className="bg-white p-6 rounded-lg shadow-md hover:bg-yellow-100 transition"
          >
            <img
              src={urineTest}
              alt="Urine Analysis"
              className="w-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-xl mb-2">Urine Analysis</h4>
            <p>
              Comprehensive urinalysis services to detect infections, kidney
              issues, and more.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default LabServices;
