"use client";
import Image from "next/image";

export default function Employee() {
  return (
    <section className="w-full mt-16 link">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="lg:w-1/2 h-[32rem]">
          <Image
            src="/testing.png"
            alt="Scientists working in a laboratory setting"
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Features Grid */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8 bg-blue-50 p-12">
          <Feature icon="👤" title="Qualified Staff" />
          <Feature icon="🔬" title="Latest Equipment" />
          <Feature icon="🖥️" title="Highest Quality Results" />
          <Feature icon="⚕️" title="State-of-the-art Facility" />
          <Feature icon="⚛️" title="Unmatched Expertise" />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#074575] text-white py-12 mt-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-6">
          <div className="text-center lg:text-left space-y-3">
            <p className="text-2xl md:text-4xl font-bold">
              Want to find out how pure the water in your area is?
            </p>
            <p className="text-lg md:text-2xl font-medium">
              Request a test and receive accurate results in record time!
            </p>
          </div>
          <button className="bg-[#ff9026] hover:bg-[#e67c15] text-white px-10 py-4 rounded-md font-medium shadow-md transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

/* Feature Card Component */
function Feature({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex flex-col items-center text-center space-y-3">
      <div className="text-5xl text-blue-500">{icon}</div>
      <h4 className="text-lg font-semibold text-blue-900">{title}</h4>
    </div>
  );
}
