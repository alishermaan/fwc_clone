import React from "react";

export default function Partners() {
  const partners = [
    { src: "/p-alpine.png", alt: "Alpine Partner" },
    { src: "/p-hague.jpg", alt: "Hague Water", label: "Quality Water Treatment" },
    { src: "/prtn1.jpg", alt: "Partner 1" },
    { src: "/prtn3.jpg", alt: "Partner 3" },
    { src: "/prtn4.jpg", alt: "Partner 4" },
    { src: "/prtn5.jpg", alt: "Partner 5" },
  ];

  return (
    <section className="py-16 link px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c628d] mb-6">
            Meet Our Partners
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Thank you for your interest in our products and services. We are
            committed to providing quality, reliable water treatment solutions
            that meet your needs and exceed your expectations.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="rounded-lg shadow-sm border border-gray-100 p-8 flex items-center justify-center min-h-[120px] hover:shadow-md transition"
            >
              <div className="text-center">
                <img
                  src={partner.src}
                  alt={partner.alt}
                  className="mx-auto max-h-24 object-contain"
                />
                {partner.label && (
                  <p className="text-xs text-gray-600 uppercase tracking-wide mt-2">
                    {partner.label}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-sm sm:text-base uppercase tracking-wide">
            Become a Client
          </button>
        </div>
      </div>
    </section>
  );
}
