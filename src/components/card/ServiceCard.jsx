import React from "react";
import Card from "./Card";

const ServiceCard = ({title, description}) => {
  return (
    <Card>
      <div className="px-4 py-6">
        <div className="flex flex-col gap-4 items-center py-2 border-b border-black md:flex-row">
          <span style={{fontSize: "48px"}} className="material-symbols-outlined">real_estate_agent</span>
          <span className="text-2xl font-semibold">
            {title}
          </span>
        </div>
        <p className="py-4 font-light text-text-1">{description}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;
