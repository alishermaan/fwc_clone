import { WaterTestingTabs } from "./ui/WaterTestingTabs";

//import { WaterTestingTabs } from "@/components/WaterTestingTabs";
export default function Index  () {
  return (
    <div className="container mx-auto bg-background py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl text-[#074575] md:text-5xl font-bold link text-primary mb-8">
            Our Services
          </h1>
          <p className="text-lg font-light text-start link text-gray-500 max-w-4xl mx-auto leading-relaxed">
            Did you know that the drinking water in Florida comes from aquifers that are located a few feet under the ground? It may sound 
            interesting but the truth is that it just increases the chances of water contamination. At Florida Water Control, we offer the 
            following services to ensure that your water has the right taste and quality.
          </p>
        </div>

        {/* Water Testing Services */}
        <WaterTestingTabs />

      </div>
    </div>
  );
};

