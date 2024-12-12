interface Props {
  size: string;
  price: { actualPrice: number; offerPrice: number };
  update: (obj: Partial<SelectedItem>) => void;
  selectedItem: SelectedItem;
}

const SizeButton = ({ price, size, update, selectedItem }: Props) => {
  return selectedItem.size === size ? (
    <button
      type="button"
      className="rounded outline-none uppercase flex justify-center items-center gap-2 border border-[#6576FF] py-1 px-3"
      onClick={() => update({ size, price })}
    >
      <span className="text-[#6576FF] text-lg font-bold uppercase">{size}</span>
      <span className="text-[#8091A7] text-[13px]">${price.offerPrice}</span>
    </button>
  ) : (
    <button
      type="button"
      className="rounded outline-none uppercase flex justify-center items-center gap-2 border border-[#8091A7] py-1 px-3"
      onClick={() => update({ size, price })}
    >
      <span className="text-[#3B4747] text-lg font-bold uppercase">{size}</span>
      <span className="text-[#8091A7] text-[13px]">${price.offerPrice}</span>
    </button>
  );
};

export default SizeButton;
