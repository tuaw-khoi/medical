interface StatBoxProps {
  number: string;
  label: string;
}

const StatBox = ({ number, label }: StatBoxProps) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#0a3d38] text-white p-10 rounded-2xl w-64 h-40 shadow-lg space-y-4 mt-10">
      <h2 className="text-3xl font-bold">{number}</h2>
      <p className="text-sm text-gray-300">{label}</p>
    </div>
  );
};

export default StatBox;
