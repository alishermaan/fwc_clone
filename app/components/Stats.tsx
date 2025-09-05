import Image from "next/image";

export default function Stats() {
  return (
    <section className="relative link overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.png"
          alt="Water lab background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative px-6 py-20 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Highlighted Stat */}
          <div className="mb-16">
            <div className="text-5xl font-bold mb-4 text-[#07a7e3]">315</div>
            <h2 className="text-xl font-bold mb-2 text-[#074599]">
              Contaminants found in water nationwide
            </h2>
            <p className="text-sm text-black font-light">Source: EWG</p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-2xl lg:text-4xl font-bold leading-snug text-[#074599]">
                Our water testing services identify the accurate level of
                minerals and harmful substances in your water.
              </h1>

              <p className="text-lg text-black font-light">
                Since 2010, water testing has found pollutants in both tap and
                bottled water across America.
              </p>

              {/* Sub Stats */}
              <div className="pt-8">
                <h3 className="text-2xl font-bold mb-8 text-[#074599]">
                  No. of microplastics in bottled water
                </h3>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-6xl font-bold text-[#07a7e3]">10</div>
                    <div className="text-lg font-medium text-[#074599]">Nestle</div>
                  </div>

                  <div>
                    <div className="text-6xl font-bold text-[#07a7e3]">5</div>
                    <div className="text-lg font-medium text-[#074599]">Bisleri</div>
                  </div>

                  <div>
                    <div className="text-6xl font-bold text-[#07a7e3]">5</div>
                    <div className="text-lg font-medium text-[#074599]">
                      Gerolsteiner
                    </div>
                  </div>

                  <div>
                    <div className="text-6xl font-bold text-[#07a7e3]">4</div>
                    <div className="text-lg font-medium text-[#074599]">Danone</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Placeholder (empty for now) */}
            <div className="hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
