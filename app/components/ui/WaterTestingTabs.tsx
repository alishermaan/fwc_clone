"use client";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestingService {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
}

const testingServices: TestingService[] = [
  {
    id: "chlorine",
    name: "Chlorine Testing",
    title: "Chlorine Testing",
    description:
      "Analyze your water samples to determine the level of free chlorine. Excessive amounts can be hazardous for your health.",
    image: "/lab-service-1.jpg",
  },
  {
    id: "lead",
    name: "Lead Testing",
    title: "Lead Testing",
    description:
      "Test for dangerous lead levels in your water supply that can cause serious health issues, especially in children and pregnant women.",
    image: "/lab-service-1.jpg",
  },
  {
    id: "bacteria",
    name: "Bacteria Testing",
    title: "Bacteria Testing",
    description:
      "Comprehensive bacterial analysis to detect harmful microorganisms that could pose serious health risks to you and your family.",
    image: "/lab-service-1.jpg",
  },
  {
    id: "pesticides",
    name: "Pesticides Testing",
    title: "Pesticides Testing",
    description:
      "Screen for agricultural and industrial pesticide contamination that can accumulate in water sources over time.",
    image: "/lab-service-1.jpg",
  },
  {
    id: "ph",
    name: "pH Testing",
    title: "pH Testing",
    description:
      "Measure the acidity and alkalinity levels of your water to ensure optimal balance for safe consumption and household use.",
    image: "/lab-service-1.jpg",
  },
  {
    id: "nitrite",
    name: "Nitrite/Nitrate Testing",
    title: "Nitrite/Nitrate Testing",
    description:
      "Test for nitrogen compounds that can indicate contamination from fertilizers, septic systems, or other pollution sources.",
    image: "/lab-service-1.jpg",
  },
];

export const WaterTestingTabs = () => {
  const [activeTab, setActiveTab] = useState("chlorine");
  const activeService = testingServices.find((service) => service.id === activeTab);

  return (
    <section className="w-full py-16 link">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap gap-6 border-b border-gray-200 mb-12">
        {testingServices.map((service) => (
          <button
            key={service.id}
            onClick={() => setActiveTab(service.id)}
            className={cn(
              "px-6 py-2 text-sm font-medium transition-all duration-200 border-b-2",
              activeTab === service.id
                ? "text-[#074575] border-[#074575] font-semibold"
                : "text-gray-500 border-transparent hover:text-[#074575] hover:border-[#074575]/40"
            )}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      {activeService && (
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-lg overflow-hidden shadow-md max-w-md w-full">
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={500}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#074575]">
              {activeService.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {activeService.description}
            </p>
            <button className="bg-[#0074ad] hover:bg-[#006693] text-white px-8 py-3 rounded-md font-medium shadow-md transition">
              READ MORE
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
