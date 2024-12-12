interface Props {
  selectedItem: SelectedItem;
  color: string;
  update: (obj: Partial<SelectedItem>) => void;
}

const ColorButton = ({ color, selectedItem, update }: Props) => {
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
      onClick={() => update({ color })}
    />
  );
};

export default ColorButton;
