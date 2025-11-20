import { useState } from "react";
import { HiLightningBolt } from "react-icons/hi";
import { GoCheckCircleFill } from "react-icons/go";
import { RiFilter3Fill } from "react-icons/ri";
import { formatCurrency, formatNumberCompact } from "../components/libs/utils";

// Mock hackathon data
const hackathons = [
  {
    id: 1,
    title: "Web3 Innovation Hackathon",
    description:
      "Build the next generation of decentralized applications. Showcase your skills in blockchain, smart contracts, and DeFi.",
    organizer: "Ethereum Foundation",
    verified: true,
    prize: 50000,
    participants: 1250,
    duration: "48 hours",
    startDate: "2024-12-15",
    endDate: "2024-12-17",
    location: "Remote",
    tags: ["Blockchain", "Web3", "DeFi", "Solidity"],
    status: "upcoming",
  },
  {
    id: 2,
    title: "AI for Good Challenge",
    description:
      "Leverage artificial intelligence to solve real-world problems. Focus on healthcare, education, and sustainability.",
    organizer: "Tech for Humanity",
    verified: true,
    prize: 75000,
    participants: 2100,
    duration: "72 hours",
    startDate: "2024-12-20",
    endDate: "2024-12-23",
    location: "Hybrid",
    tags: ["AI", "ML", "Healthcare", "Python"],
    status: "upcoming",
  },
  {
    id: 3,
    title: "Mobile App Development Sprint",
    description:
      "Create innovative mobile applications for iOS and Android. Focus on user experience and modern design principles.",
    organizer: "App Innovators",
    verified: false,
    prize: 30000,
    participants: 890,
    duration: "36 hours",
    startDate: "2024-12-10",
    endDate: "2024-12-11",
    location: "Remote",
    tags: ["React Native", "Flutter", "Mobile", "UI/UX"],
    status: "active",
  },
  {
    id: 4,
    title: "Climate Tech Hackathon",
    description:
      "Develop solutions to combat climate change. Build tools for carbon tracking, renewable energy, and sustainability.",
    organizer: "GreenTech Alliance",
    verified: true,
    prize: 100000,
    participants: 3200,
    duration: "96 hours",
    startDate: "2025-01-05",
    endDate: "2025-01-09",
    location: "San Francisco",
    tags: ["Climate", "Sustainability", "IoT", "Data Science"],
    status: "upcoming",
  },
  {
    id: 5,
    title: "FinTech Innovation Challenge",
    description:
      "Revolutionize financial services with cutting-edge technology. Focus on payments, banking, and financial inclusion.",
    organizer: "FinTech Ventures",
    verified: true,
    prize: 60000,
    participants: 1500,
    duration: "48 hours",
    startDate: "2024-11-28",
    endDate: "2024-11-30",
    location: "Remote",
    tags: ["FinTech", "Payments", "Banking", "Security"],
    status: "ended",
  },
];

export default function Hackathons() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { name: "All", value: "all" },
    { name: "Upcoming", value: "upcoming" },
    { name: "Active", value: "active" },
    { name: "Ended", value: "ended" },
  ];

  const filteredHackathons =
    activeFilter === "all"
      ? hackathons
      : hackathons.filter((h) => h.status === activeFilter);

  return (
    <div className="w-full min-h-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-c-color/10 flex items-center justify-center">
              <HiLightningBolt className="text-c-color" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-black">
                Hackathons
              </h1>
              <p className="text-black/60 mt-1">
                Join competitions, build projects, and win prizes
              </p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <div className="flex items-center gap-2 text-black/60">
              <RiFilter3Fill size={18} />
              <span className="text-sm font-medium">Filter by status</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.value
                      ? "bg-c-color text-white"
                      : "bg-white border border-black/10 text-black/70 hover:bg-black/5"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHackathons.map((hackathon) => (
            <div
              key={hackathon.id}
              className="bg-white border border-black/10 rounded-2xl p-6 space-y-4 hover:border-c-color/30 transition-all duration-300 cursor-pointer group"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    hackathon.status === "active"
                      ? "bg-green-100 text-green-700"
                      : hackathon.status === "upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {hackathon.status}
                </span>
                {hackathon.verified && (
                  <GoCheckCircleFill className="text-c-color" size={18} />
                )}
              </div>

              {/* Title & Organizer */}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-black group-hover:text-c-color transition-colors">
                  {hackathon.title}
                </h2>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-black/70">
                    {hackathon.organizer}
                  </p>
                  {hackathon.verified && (
                    <GoCheckCircleFill className="text-c-color" size={14} />
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-black/60 line-clamp-3">
                {hackathon.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-black/50">
                    Prize Pool
                  </p>
                  <p className="text-lg font-bold text-black">
                    {formatCurrency(hackathon.prize, 0)}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-widest text-black/50">
                    Participants
                  </p>
                  <p className="text-lg font-bold text-black">
                    {formatNumberCompact(hackathon.participants)}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-black/5">
                <div className="flex items-center gap-1.5 text-xs text-black/60">
                  <HiLightningBolt size={14} />
                  <span>{hackathon.duration}</span>
                </div>
                <span className="text-black/20">•</span>
                <span className="text-xs text-black/60">{hackathon.location}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {hackathon.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-black/5 text-black/70"
                  >
                    {tag}
                  </span>
                ))}
                {hackathon.tags.length > 3 && (
                  <span className="px-2.5 py-1 rounded-lg text-xs font-medium text-black/50">
                    +{hackathon.tags.length - 3}
                  </span>
                )}
              </div>

              {/* CTA Button */}
              <button
                type="button"
                className="w-full mt-4 px-4 py-3 rounded-xl bg-c-color text-white font-semibold text-sm hover:bg-c-color/90 transition-colors duration-200"
              >
                {hackathon.status === "active"
                  ? "Join Now"
                  : hackathon.status === "upcoming"
                  ? "Register"
                  : "View Details"}
              </button>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredHackathons.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-black/60">
              No hackathons found
            </p>
            <p className="text-sm text-black/50 mt-2">
              Try selecting a different filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

