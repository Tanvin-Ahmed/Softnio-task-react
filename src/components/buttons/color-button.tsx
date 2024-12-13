import { data } from "../../data/data";

interface Props {
  selectedItem: SelectedItem;
  color: string;
  update: (obj: Partial<SelectedItem>) => void;
}

const ColorButton = ({ color, selectedItem, update }: Props) => {
  const colorName = Object.keys(
    data.colors.find((colorObj) => Object.values(colorObj)[0] === color)!
  )[0];

  return selectedItem.color === color ? (
    <button
      type="button"
      style={{
        borderColor: color,
      }}
      className="w-6 h-6 rounded-full bg-transparent border-2 outline-none flex justify-center items-center transition-all duration-300 ease-in-out"
    >
      <span
        style={{ backgroundColor: color }}
        className="block w-4 h-4 rounded-full"
      />
    </button>
  ) : (
    <button
      type="button"
      style={{
        backgroundColor: color,
      }}
      className="w-4 h-4 rounded-full border-none outline-none flex justify-center items-center transition-all duration-300 ease-in-out"
      onClick={() => update({ color, image: `./assets/${colorName}.png` })}
    />
  );
};

export default ColorButton;
