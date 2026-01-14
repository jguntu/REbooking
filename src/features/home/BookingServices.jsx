export default function BookingServices() {
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
