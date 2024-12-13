interface Props {
  handleAddToCart: () => void;
}

const AddToCartButton = ({ handleAddToCart }: Props) => {
  return (
    <button
      type="button"
      className="outline-none text-[13px] flex justify-center items-center rounded bg-[#6576FF] text-white py-1.5 px-2.5"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
