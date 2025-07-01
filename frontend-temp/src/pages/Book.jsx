function Book() {
  return (
    <section className="py-16 px-4 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Book a Lab Test</h2>
        <p className="mb-6">Fill out the form to schedule your appointment.</p>

        <form className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="date"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <select className="w-full border border-gray-300 p-3 rounded">
            <option>Select Test Type</option>
            <option>Blood Test</option>
            <option>COVID-19 Test</option>
            <option>Urine Analysis</option>
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Book Now
          </button>
        </form>
      </div>
    </section>
  );
}

export default Book;
