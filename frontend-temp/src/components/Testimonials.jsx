import john from "../assets/john.jpg"
import mary from "../assets/mary.jpg"
function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h3 className="text-2xl font-semibold mb-8">What Our Users Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <blockquote className="bg-gray-100 p-4 rounded shadow text-right grid justify-items-center ">
          <img src={mary} alt="mary" className="rounded-full w-50" />
          “Super easy to use. Got my test results fast.” –<strong>Mary</strong>
        </blockquote>
        <blockquote className="bg-gray-100 p-4 rounded shadow grid justify-items-center">
          <img src={john} alt="john" className="rounded-full w-50" />
          “Affordable and trustworthy lab platform.” – <strong>John</strong>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonials;
