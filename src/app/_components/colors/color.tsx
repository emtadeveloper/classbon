import { colord } from "colord";
import { tailwindColors } from "../../../../tailwind.config";

const getTextColor = (backgroundColor: string): string => {
  return colord(backgroundColor).isDark() ? "#dddddd" : "#333333";
};

export const Colors: React.FC = () => (
  <div className="flex flex-wrap justify-center">
    {Object.entries(tailwindColors).map(([name, color]) => (
      <ColorBox key={name} name={name} color={color} />
    ))}
  </div>
);

const ColorBox: React.FC<{ name: string; color: string }> = ({ name, color }) => (
  <div className="w-96  h-100 flex  " style={{ backgroundColor: color, color: getTextColor(color) }}>
    <p className="mt-2 text-sm">{name}</p>
    <p className="text-xs text-gray-500">{color}</p>
  </div>
);
