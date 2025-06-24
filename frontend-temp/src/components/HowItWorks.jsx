import testtubeImg from "../assets/testube.svg";
import calendarImg from "../assets/calendar.svg";
import onlineImg from "../assets/registration.png"

function HowItWorks() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h3 className="text-3xl font-bold mb-10 text-blue-600">How It Works</h3>
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="flex-1">
          <div className="text-4xl mb-2 justify-items-center"><img src={testtubeImg} alt="choose test" className="w-20"/></div>
          <h4 className="text-xl font-semibold mb-2">1. Choose Test</h4>
          <p className="text-gray-600">Select the lab test you need.</p>
        </div>
        <div className="flex-1">
          <div className="text-4xl mb-2 justify-items-center"><img src={calendarImg} alt="book slot" className="w-20" /></div>
          <h4 className="text-xl font-semibold mb-2">2. Book Slot</h4>
          <p className="text-gray-600">Pick a convenient date & time.</p>
        </div>
        <div className="flex-1">
          <div className="text-4xl mb-2 justify-items-center"><img src={onlineImg} alt="get results" className="w-20" /></div>
          <h4 className="text-xl font-semibold mb-2">3. Get Results</h4>
          <p className="text-gray-600">Receive results online.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
