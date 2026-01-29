const tabs = [
  "Seat",
  "Split",
  "Metal",
  "Leather",
  "Stepped",
  "Sport",
  "Cover",
  "Color",
];

const OptionTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-6 mt-6 border-t border-gray-700 pt-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm ${
            activeTab === tab
              ? "text-green-400 border-b-2 border-green-400"
              : "text-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default OptionTabs;
