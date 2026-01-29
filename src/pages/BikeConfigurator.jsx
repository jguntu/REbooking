import { useState } from "react";
import BikePreview from "../features/components/productsPage/BikePreview";
import OptionTabs from "../features/components/productsPage/OptionTabs";
import SidebarOptions from "../features/components/productsPage/SidebarOptions";
import { seatOptions } from "../data/bikeOptions";


const BikeConfigurator = () => {
  const [activeTab, setActiveTab] = useState("Seat");
  const [selectedOption, setSelectedOption] = useState(seatOptions[0]);

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Section */}
      <div className="flex-1">
        <BikePreview />
        <OptionTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Right Sidebar */}
      <SidebarOptions
        options={seatOptions}
        selectedOption={selectedOption}
        onSelect={setSelectedOption}
      />
    </div>
  );
};

export default BikeConfigurator;
