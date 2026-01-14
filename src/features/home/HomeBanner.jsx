export default function HomeBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-black via-gray-900 to-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.25),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold rounded-full bg-red-600/20 text-red-400">
            Royal Enfield Booking
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Ride the Legend.
            <br />
            <span className="text-red-500">Book Your Enfield</span>
          </h1>
          <p className="text-gray-300 mb-8 max-w-xl">
            Instantly book your Royal Enfield motorcycle with a
            seamless and secure booking experience.
          </p>

          <div className="flex gap-4">
            <button className="bg-red-600 hover:bg-red-700 px-7 py-3 rounded-lg font-semibold shadow-lg">
              Book Now
            </button>
            <button className="bg-white/10 backdrop-blur border border-white/20 px-7 py-3 rounded-lg hover:bg-white hover:text-black transition">
              View Models
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-red-600 to-orange-500 rounded-3xl blur-2xl opacity-30" />
          <img
            src="/flyingflea.png"
            alt="Royal Enfield Bike"
            className="relative rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}