import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoCheckCircleFill } from "react-icons/go";
import { HiLightningBolt } from "react-icons/hi";
import { data } from "../components/data/data";
import { formatCurrency } from "../components/libs/utils";

export default function OpportunityDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Amina O.",
      role: "Project Lead @ HackNest",
      timestamp: "2h ago",
      body:
        "We’re reviewing submissions later this week. Drop any clarifying questions here and the core team will respond.",
    },
    {
      id: 2,
      author: "Leo M.",
      role: "Frontend Engineer",
      timestamp: "45m ago",
      body: "Is there a preferred stack for the dashboard deliverable? I’m thinking React + Tailwind + viem.",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!message.trim()) return;
    const newComment = {
      id: Date.now(),
      author: "You",
      role: "Contributor",
      timestamp: "Just now",
      body: message.trim(),
    };
    setComments((prev) => [newComment, ...prev]);
    setMessage("");
  };

  const opportunity = useMemo(
    () => data.find((item) => String(item.id) === id),
    [id]
  );

  if (!opportunity) {
    return (
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-4">
        <p className="text-2xl font-semibold">Opportunity not found</p>
        <p className="text-black/60">
          The opportunity you&apos;re looking for may have been moved or no longer
          exists.
        </p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-c-color text-white font-semibold hover:bg-c-color/90 transition-colors duration-200"
        >
          Go back home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full py-10">
      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="text-sm font-medium text-black/60 hover:text-black transition-colors duration-200"
        >
          ← Back to opportunities
        </button>

        <div className="rounded-3xl bg-linear-to-br from-white to-c-color/5 p-8 border border-black/5 space-y-6">
          <div className="flex flex-col items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-c-color/10 flex items-center justify-center text-2xl font-bold text-c-color">
              {opportunity.company?.slice(0, 2)}
            </div>
            <div className="space-y-4 w-full">
              <div className="flex flex-col gap-2">
                <p className="text-sm uppercase tracking-wider text-black/50">
                  #{String(opportunity.id).padStart(3, "0")}
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
                  {opportunity.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 text-black/70">
                  <span className="flex items-center gap-1.5 text-sm font-medium">
                    {opportunity.company}
                    <GoCheckCircleFill className="text-c-color" size={16} />
                  </span>
                  <span className="w-[1px] h-4 bg-black/20" />
                  <span className="text-sm font-medium">{opportunity.location}</span>
                  <span className="w-[1px] h-4 bg-black/20" />
                  <span className="flex items-center gap-1 text-sm font-medium">
                    <HiLightningBolt className="text-black/50" />
                    {opportunity.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="rounded-2xl bg-white border border-black/5 px-6 py-4">
                  <p className="text-xs uppercase tracking-widest text-black/50">
                    Reward
                  </p>
                  <p className="text-2xl font-semibold">
                    {formatCurrency(opportunity.reward)}
                  </p>
                </div>
                <div className="rounded-2xl bg-white border border-black/5 px-6 py-4">
                  <p className="text-xs uppercase tracking-widest text-black/50">
                    Deadline
                  </p>
                  <p className="text-lg font-semibold">Due in 3 days</p>
                </div>
                <div className="rounded-2xl bg-white border border-black/5 px-6 py-4">
                  <p className="text-xs uppercase tracking-widest text-black/50">
                    Status
                  </p>
                  <p className="text-lg font-semibold capitalize">
                    {opportunity.status}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-black/70 uppercase tracking-widest">
              Overview
            </p>
            <p className="leading-relaxed text-black/70">
              {opportunity.description}
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold text-black/70 uppercase tracking-widest">
              Required skills
            </p>
            <div className="flex flex-wrap gap-2">
              {opportunity.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-black/5 text-black/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/5 bg-white p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-black/60 uppercase tracking-widest">
                  Company
                </p>
                <p className="text-xl font-semibold">{opportunity.company}</p>
                <p className="text-sm text-black/60">{opportunity.companyIndustry}</p>
              </div>
              <button
                type="button"
                onClick={() => window.open(opportunity.companyWebsite, "_blank")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold"
              >
                {/* <LuGlobe2 size={18} /> */}
                Visit site
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-black/70">
              <p>
                <span className="font-semibold text-black">Location:</span>{" "}
                {opportunity.companyLocation}
              </p>
              <p>
                <span className="font-semibold text-black">Size:</span>{" "}
                {opportunity.companySize.toLocaleString()}+
              </p>
              <p>
                <span className="font-semibold text-black">Founded:</span>{" "}
                {opportunity.companyFounded}
              </p>
              <p>
                <span className="font-semibold text-black">CEO:</span>{" "}
                {opportunity.companyCEO}
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            <button
              type="button"
              className="flex-1 px-6 py-4 rounded-2xl bg-c-color text-white font-semibold text-center hover:bg-c-color/80 transition-colors duration-200"
            >
              Apply now
            </button>
            <button
              type="button"
              className="flex-1 px-6 py-4 rounded-2xl border border-black/10 font-semibold text-center hover:border-black/30 transition-colors duration-200"
            >
              Save for later
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-black/5 bg-white/90 backdrop-blur-sm p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-black/60 uppercase tracking-widest">
                Live discussion
              </p>
              <p className="text-xl font-semibold">Founder chat</p>
            </div>
            <span className="text-sm text-black/50">{comments.length} updates</span>
          </div>

          <div className="space-y-4 max-h-80 overflow-y-auto pr-1 custom-scroll">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-2xl border border-black/5 p-4 bg-black/2 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-black">
                      {comment.author}
                    </p>
                    <p className="text-xs text-black/60">{comment.role}</p>
                  </div>
                  <span className="text-xs text-black/50">{comment.timestamp}</span>
                </div>
                <p className="text-sm text-black/70 leading-relaxed">
                  {comment.body}
                </p>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <label className="text-sm font-semibold text-black/70" htmlFor="new-comment">
              Drop a note for the team
            </label>
            <textarea
              id="new-comment"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Share feedback, ask a question, or cheer on other builders."
              className="w-full rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-c-color focus:ring-2 focus:ring-c-color/20 min-h-[110px] resize-none"
            />
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-black/50">
                This thread is public to everyone exploring the bounty.
              </p>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-2xl bg-c-color text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!message.trim()}
              >
                Post update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

