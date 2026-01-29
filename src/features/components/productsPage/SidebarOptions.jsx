import OptionCard from "./OptionCard";

const SidebarOptions = ({ options, selectedOption, onSelect }) => {
  return (
    <div className="w-[260px] bg-gray-950 p-4 space-y-4">
      {options.map((option) => (
        <OptionCard
          key={option.id}
          option={option}
          isSelected={selectedOption.id === option.id}
          onClick={() => onSelect(option)}
        />
      ))}
    </div>
  );
};

export default SidebarOptions;
