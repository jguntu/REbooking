export default function WhyRoyalEnfield() {
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