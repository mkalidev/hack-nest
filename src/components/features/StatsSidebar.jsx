import { HiLightningBolt } from "react-icons/hi";
import { GoCheckCircleFill } from "react-icons/go";
import { formatCurrency } from "../libs/utils";
import { data } from "../data/data";

export default function StatsSidebar() {
  // Calculate total value earned
  const totalValue = data.reduce((sum, item) => sum + (item.reward || 0), 0);
  
  // Count opportunities
  const opportunityCount = data.length;

  const steps = [
    {
      icon: <HiLightningBolt className="text-c-color" size={20} />,
      title: "Browse Opportunities",
      description: "Explore available bounties and projects",
    },
    {
      icon: <GoCheckCircleFill className="text-c-color" size={20} />,
      title: "Apply & Submit",
      description: "Submit your application and work",
    },
    {
      icon: <HiLightningBolt className="text-c-color" size={20} />,
      title: "Get Rewarded",
      description: "Receive payment upon completion",
    },
  ];

  return (
    <div className="w-full md:w-80 lg:w-96">
      <div className="sticky top-24 space-y-6">
        {/* Stats Cards */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-black">Platform Stats</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-c-color/5">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/50">
                  Total Value Earned
                </p>
                <p className="text-2xl font-bold text-c-color mt-1">
                  {formatCurrency(totalValue, 0)}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-c-color/10 flex items-center justify-center">
                <HiLightningBolt className="text-c-color" size={24} />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl bg-black/5">
              <div>
                <p className="text-xs uppercase tracking-widest text-black/50">
                  Opportunities Listed
                </p>
                <p className="text-2xl font-bold text-black mt-1">
                  {opportunityCount}
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center">
                <GoCheckCircleFill className="text-black" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white border border-black/10 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-black">How It Works</h3>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-c-color/10 flex items-center justify-center relative z-10">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-0.5 h-8 bg-c-color/20 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold text-c-color">
                        Step {index + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-black mb-1">
                      {step.title}
                    </h4>
                    <p className="text-xs text-black/60">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-c-color/10 to-purple-300/10 border border-c-color/20 rounded-2xl p-6 space-y-4">
          <h3 className="text-lg font-bold text-black">Ready to Start?</h3>
          <p className="text-sm text-black/60">
            Join thousands of developers earning from bounties and opportunities.
          </p>
          <button
            type="button"
            className="w-full px-4 py-3 rounded-xl bg-c-color text-white font-semibold text-sm hover:bg-c-color/90 transition-colors duration-200"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

