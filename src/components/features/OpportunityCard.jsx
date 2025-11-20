import { GoCheckCircleFill } from "react-icons/go";
import { HiLightningBolt } from "react-icons/hi";
import { formatCurrency } from "../libs/utils";

export function OpportunityCard({ item }) {
  if (!item) return null;

  return (
    <div className="w-full bg-white flex flex-col md:flex-row justify-between gap-4 items-center rounded-md p-4 border border-transparent cursor-pointer transition-all duration-300">
      <div className="flex flex-col items-start md:flex-row gap-4">
        <img
          src="/103780637.png"
          alt=""
          className="w-20 h-20 bg-c-color/10 object-cover"
        />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <div className="flex gap-2 items-center">
            <h3 className="text-sm font-medium text-black/80">
              {item.company}
            </h3>
            <GoCheckCircleFill size={16} className="text-c-color" />
          </div>
          <div className="flex items-center gap-3 pb-1">
            <div className="flex gap-1.5 items-center">
              <HiLightningBolt size={15} className="text-black/60" />
              <p className="text-xs font-medium text-black/60">Bounty</p>
            </div>
            <div className="w-[1.5px] h-4 bg-black/30" />
            <div className="flex gap-1.5 items-center">
              <p className="text-xs font-medium text-black/60">Due in 3d</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            {item.tags?.map((tag) => (
              <div
                key={tag}
                className="text-xs font-medium text-black/60 px-2 py-1 rounded-md bg-black/5"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {formatCurrency(item.reward)}
      </div>
    </div>
  );
}

