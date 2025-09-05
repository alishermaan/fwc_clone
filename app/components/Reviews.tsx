export default function Reviews() {
  return (
    <section className="relative lg:h-[28rem] link md:h-[17rem] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-[#2c628d] bg-opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
        {/* Header */}
        <header className="mb-8">
          <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6">
            Reviews
          </h1>
          <div className="w-full h-[2px] bg-white mx-auto"></div>
        </header>

        {/* Testimonial */}
        <main>
          <p className="text-lg md:text-xl font-light leading-relaxed mb-6">
            “I live in Broward county. Everyone knows what kind of water we have.
            I called Florida Water Control and they came the same day. Very
            professional! They managed to help me with choosing the right
            equipment for my needs and more than that I saved a lot. Highly
            recommended.”
          </p>

          {/* Star Rating */}
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.072 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.072 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.072-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.072-3.292z" />
              </svg>
            ))}
          </div>

          {/* Customer */}
          <p className="font-medium text-lg">— Justin L.</p>
        </main>

        {/* Carousel Navigation */}
        <footer className="flex justify-center items-center space-x-3 mt-8">
          <button
            className="w-3 h-3 rounded-full bg-white opacity-60 hover:opacity-100 transition"
            aria-label="View review 1"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-white opacity-60 hover:opacity-100 transition"
            aria-label="View review 2"
          ></button>
          <button
            className="w-3 h-3 rounded-full bg-blue-400 opacity-100"
            aria-label="View review 3 - current"
          ></button>
        </footer>
      </div>
    </section>
  );
}
