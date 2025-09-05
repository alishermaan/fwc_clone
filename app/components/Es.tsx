import Image from "next/image";

export default function Es() {
  return (
    <section className="py-16 px-4 bg-white flex items-center justify-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Professional woman image */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <Image
                src="/ww.png"
                alt="Professional water testing specialist"
                width={500}
                height={600}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6 link">
            {/* Welcome heading */}
            <h1 className="text-[#074575] text-4xl lg:text-5xl font-bold">
              Welcome
            </h1>

            {/* Main headline */}
            <h2 className="text-[#074575] text-xl lg:text-2xl font-semibold leading-snug">
              Ensuring 24/7 access to pure, healthy, germ-free water!
            </h2>

            {/* Body text */}
            <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
              Consuming and using clean water is a prerequisite for leading a
              healthy life. Florida Water Control is all about analyzing water
              samples using the latest technology to ensure you have access to
              healthy, contaminant-free water. Water testing identifies the
              levels of contaminants and minerals in your water samples. Our
              water specialists capitalize on their experience and resources to
              set water remediation goals for you. We aim to improve the water
              standards at your home because we care about you and your family!
            </p>

            {/* Attribution */}
            <p className="text-gray-700 font-semibold md:text-lg italic">
              — Madina Sokolov, PhD in Neuroscience
            </p>

            {/* Hours box */}
            <div className="border-2 border-dashed border-[#074575] p-4 inline-block rounded-md">
              <p className="text-[#074575] font-semibold text-sm">
                <span className="font-bold">OUR OPENING HOURS:</span> Monday to
                Sunday: 9:00 am – 8:00 pm
              </p>
            </div>

            {/* Contact button */}
            <div className="pt-2">
              <button className="bg-[#074575] hover:bg-[#06365c] text-white font-bold text-sm px-8 py-3 rounded-lg uppercase tracking-wide transition">
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
