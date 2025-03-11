import { useState } from "react";
import { ChevronDown } from "lucide-react";

const DropdownArrow = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1"
      >
        <ChevronDown
          className={`transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {isOpen && (
        <div className="absolute -left-16 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
          Dropdown Content
        </div>
      )}
    </div>
  );
};

export default DropdownArrow;
