import counts from "../../data/counts";
import { useState } from "react";
import CountUp from "react-countup";

const Count = ({ icon, countNumber, table, isAchivementsVisible }) => {
  return (
    <div
      className="
        flex  
        gap-3
        items-center
        justify-center sm:justify-start
      "
    >
      <img className="w-8 h-8" src={icon} alt={table} />

      <div>
        <h3
          id="counterHeader"
          className="text-heading-grey text-lg font-semibold"
        >
          {countNumber.bigNumber}
          <CountUp
            start={0}
            end={isAchivementsVisible ? countNumber.smallNumber : null}
            duration={3}
          />
        </h3>
        <p className="text-line-grey text-xs">{table}</p>
      </div>
    </div>
  );
};
const Counts = ({ isAchivementsVisible }) => {
  return counts.map((count) => {
    return <Count {...count} isAchivementsVisible={isAchivementsVisible} />;
  });
};

export default Counts;
