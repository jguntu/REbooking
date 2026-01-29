const OptionCard = ({ option, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer p-3 rounded-xl border ${
        isSelected ? "border-green-400" : "border-gray-700"
      } bg-gray-900`}
    >
      <img
        src={option.image}
        alt={option.name}
        className="w-full h-20 object-contain"
      />
      <p className="mt-2 text-sm">{option.name}</p>
      <p className="text-xs text-gray-400">{option.price}</p>
    </div>
  );
};

export default OptionCard;
