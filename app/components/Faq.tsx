import React from "react";

export default function Faq() {
  return (
    <section className="w-full link container mx-auto flex flex-col md:flex-row items-start justify-between gap-10 px-6 py-12 md:py-20">
      {/* Blog Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold text-[#074575] mb-6">
          Our Blog
        </h2>
        <div className="space-y-6">
          {/* Blog Item */}
          <div className="flex gap-4">
            <img
              src="/blog-img.jpg"
              alt="Blog Image 1"
              className="w-36 h-20 object-cover rounded-md"
            />
            <a
              href="#"
              className="text-[#07a7e3] font-bold hover:underline leading-snug"
            >
              Doesn’t my municipality already treat and test my water?
            </a>
          </div>

          <div className="flex gap-4">
            <img
              src="/blog-img1.jpg"
              alt="Blog Image 2"
              className="w-36 h-20 object-cover rounded-md"
            />
            <a
              href="#"
              className="text-[#07a7e3] font-bold hover:underline leading-snug"
            >
              Isn’t bottled water better for you than tap water?
            </a>
          </div>

          <div className="flex gap-4">
            <img
              src="/blog-img2.jpg"
              alt="Blog Image 3"
              className="w-36 h-20 object-cover rounded-md"
            />
            <a
              href="#"
              className="text-[#07a7e3] font-bold hover:underline leading-snug"
            >
              Don’t water filters remove important minerals from my water?
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-4xl font-bold text-[#074575] mb-6">
          Frequently Asked <span className="font-medium">Questions</span>
        </h2>
        <div className="border border-gray-300 divide-y divide-gray-300 rounded-md">
          {[
            "Doesn’t my municipality already treat and test my water?",
            "Isn’t bottled water better for you than tap water?",
            "Don’t water filters remove important minerals from my water?",
            "What exactly is soft water?",
            "How much does a water softener cost?",
          ].map((question, i) => (
            <button
              key={i}
              className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-gray-100 transition"
            >
              <span className="flex items-center gap-2 font-semibold text-[#074575]">
                <span className="text-lg font-bold">+</span>
                {question}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
