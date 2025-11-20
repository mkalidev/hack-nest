import { useState } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { GoCheckCircleFill } from "react-icons/go";
import { RiFilter3Fill } from "react-icons/ri";
import { HiArrowRight } from "react-icons/hi";
import { formatCurrency, formatNumberCompact } from "../components/libs/utils";

// Mock grants data
const grants = [
  {
    id: 1,
    title: "Open Source Development Grant",
    description:
      "Support for developers building open-source tools and libraries that benefit the entire community.",
    organization: "Tech Foundation",
    verified: true,
    amount: 50000,
    duration: "6 months",
    category: "Development",
    status: "open",
    deadline: "2024-12-31",
  },
  {
    id: 2,
    title: "Climate Tech Innovation Fund",
    description:
      "Funding for startups and projects focused on climate solutions, renewable energy, and sustainability.",
    organization: "Green Ventures",
    verified: true,
    amount: 100000,
    duration: "12 months",
    category: "Climate",
    status: "open",
    deadline: "2025-01-15",
  },
  {
    id: 3,
    title: "AI Research Fellowship",
    description:
      "Research grants for AI/ML projects with potential for significant impact in healthcare and education.",
    organization: "AI Institute",
    verified: true,
    amount: 75000,
    duration: "9 months",
    category: "AI/ML",
    status: "open",
    deadline: "2024-12-20",
  },
  {
    id: 4,
    title: "Web3 Infrastructure Grant",
    description:
      "Support for building decentralized infrastructure, protocols, and developer tools for the Web3 ecosystem.",
    organization: "Crypto Foundation",
    verified: true,
    amount: 150000,
    duration: "12 months",
    category: "Blockchain",
    status: "open",
    deadline: "2025-02-01",
  },
];

const features = [
  {
    icon: "💰",
    title: "Generous Funding",
    description: "Receive substantial grants to support your innovative projects and ideas.",
  },
  {
    icon: "🌍",
    title: "Global Reach",
    description: "Connect with a worldwide community of developers and innovators.",
  },
  {
    icon: "🚀",
    title: "Fast Approval",
    description: "Quick application process with transparent evaluation criteria.",
  },
  {
    icon: "🤝",
    title: "Mentorship",
    description: "Access to industry experts and mentors to guide your journey.",
  },
];

const steps = [
  {
    number: "01",
    title: "Browse Grants",
    description: "Explore available grants that match your project and expertise.",
  },
  {
    number: "02",
    title: "Apply",
    description: "Submit your application with project details and proposal.",
  },
  {
    number: "03",
    title: "Review",
    description: "Our team reviews your application and evaluates your project.",
  },
  {
    number: "04",
    title: "Get Funded",
    description: "Receive funding and start building your innovative solution.",
  },
];

export default function Grants() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { name: "All", value: "all" },
    { name: "Development", value: "Development" },
    { name: "Climate", value: "Climate" },
    { name: "AI/ML", value: "AI/ML" },
    { name: "Blockchain", value: "Blockchain" },
  ];

  const filteredGrants =
    activeFilter === "all"
      ? grants
      : grants.filter((g) => g.category === activeFilter);

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-c-color/10 text-c-color text-sm font-semibold">
              <HiLightningBolt size={18} />
              <span>Funding Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-black leading-tight">
              Transform Your Ideas Into
              <span className="text-c-color"> Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-black/60 max-w-2xl mx-auto">
              Discover grants and funding opportunities to bring your innovative
              projects to life. Join thousands of developers building the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                type="button"
                className="px-8 py-4 rounded-xl bg-c-color text-white font-semibold text-lg hover:bg-c-color/90 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Browse Grants
                <HiArrowRight size={20} />
              </button>
              <button
                type="button"
                className="px-8 py-4 rounded-xl border-2 border-black/10 text-black font-semibold text-lg hover:border-black/30 transition-colors duration-200"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 border-y border-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-c-color">
                $2.5M+
              </p>
              <p className="text-sm text-black/60 mt-2">Total Grants Awarded</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-c-color">500+</p>
              <p className="text-sm text-black/60 mt-2">Projects Funded</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-c-color">50+</p>
              <p className="text-sm text-black/60 mt-2">Active Grants</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-c-color">12K+</p>
              <p className="text-sm text-black/60 mt-2">Applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Why Choose Our Grants?
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              We provide comprehensive support to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-black/10 space-y-4 hover:border-c-color/30 transition-all duration-300"
              >
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="text-xl font-bold text-black">{feature.title}</h3>
                <p className="text-black/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Grants Section */}
      <section className="w-full py-20 bg-black/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Available Grants
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Explore funding opportunities that match your project
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.value
                    ? "bg-c-color text-white"
                    : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>

          {/* Grants Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredGrants.map((grant) => (
              <div
                key={grant.id}
                className="bg-white rounded-2xl border border-black/10 p-8 space-y-6 hover:border-c-color/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-c-color/10 text-c-color">
                      {grant.category}
                    </span>
                    <h3 className="text-2xl font-bold text-black">
                      {grant.title}
                    </h3>
                  </div>
                  {grant.verified && (
                    <GoCheckCircleFill className="text-c-color" size={24} />
                  )}
                </div>

                <p className="text-black/60 leading-relaxed">
                  {grant.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/60">Organization</span>
                    <span className="text-sm font-semibold text-black">
                      {grant.organization}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/60">Grant Amount</span>
                    <span className="text-lg font-bold text-c-color">
                      {formatCurrency(grant.amount, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/60">Duration</span>
                    <span className="text-sm font-semibold text-black">
                      {grant.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-black/60">Deadline</span>
                    <span className="text-sm font-semibold text-black">
                      {new Date(grant.deadline).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full mt-6 px-6 py-4 rounded-xl bg-c-color text-white font-semibold hover:bg-c-color/90 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  Apply Now
                  <HiArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>

          {filteredGrants.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-black/60">
                No grants found
              </p>
              <p className="text-sm text-black/50 mt-2">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              How It Works
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Simple steps to get your project funded
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl font-bold text-c-color/20">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-black">{step.title}</h3>
                <p className="text-black/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-c-color/10 p-12 md:p-16 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-black">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-black/60 max-w-2xl mx-auto">
              Join thousands of developers who have received funding for their
              innovative projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button
                type="button"
                className="px-8 py-4 rounded-xl bg-c-color text-white font-semibold text-lg hover:bg-c-color/90 transition-colors duration-200"
              >
                Browse All Grants
              </button>
              <button
                type="button"
                className="px-8 py-4 rounded-xl bg-white border-2 border-black/10 text-black font-semibold text-lg hover:border-black/30 transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

