import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full pt-[6rem] md:pt-[8rem]">
      {/* Background Image */}
      <Image
        src="/hero_img.jpg"
        alt="Clean Water Lab"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#074575]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        {/* Tagline */}
        <span className="border border-white px-4 py-2 uppercase text-sm tracking-widest mb-6">
          Led by Professional Dedicated Experts
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-6xl link lg:text-7xl  2xl:text-[10rem] font-bold  ">
          Protect Your Health With <br /> Clean Water
        </h1>

        {/* Subtitle */}
        <p className="mt-6 link md:mt-8 text-lg md:text-xl">
          We care about you and your family!
        </p>

        {/* CTA Button */}
        <button className="mt-8 link md:mt-10 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 md:py-4 md:px-10 rounded-lg shadow-lg transition">
          Claim Your Free Water Test Now
        </button>
      </div>
    </section>
  );
}
