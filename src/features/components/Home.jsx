import React from "react";

// Home Page Wrapper
export default function Home() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-gray-100">
      <HomeBanner />
      <BookingServices />
      <WhyRoyalEnfield />
    </div>
  );
}

// ---------------- Banner Section ----------------
function HomeBanner() {
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

// ---------------- Booking Services Section ----------------
function BookingServices() {
  const services = [
    {
      title: "Pre-Booking",
      description: "Reserve upcoming models before launch and ride first.",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Instant Booking",
      description: "Book available motorcycles instantly with secure payments.",
      color: "from-amber-500 to-yellow-400",
    },
    {
      title: "Order Tracking",
      description: "Track delivery status and updates in real time.",
      color: "from-rose-500 to-pink-500",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Booking Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-1 rounded-2xl bg-gradient-to-br transition hover:scale-105"
              style={{ backgroundImage: `linear-gradient(to bottom right, ${service.color})` }}
            >
              <div className="bg-white rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-red-600">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------- Why Royal Enfield Section ----------------
function WhyRoyalEnfield() {
  const points = [
    "Iconic Design",
    "Trusted Performance",
    "Global Riding Community",
  ];

  return (
    <section className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Why Royal Enfield?
        </h2>
        <p className="text-red-100 max-w-3xl mx-auto mb-12">
          More than a motorcycle — Royal Enfield represents heritage,
          craftsmanship, and a passion for pure motorcycling.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur p-8 rounded-2xl shadow-lg"
            >
              <h4 className="text-lg font-semibold">{point}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
