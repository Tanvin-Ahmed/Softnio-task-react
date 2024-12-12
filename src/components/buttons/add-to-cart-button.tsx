interface Props {
  handleAddToCart: () => void;
}

const AddToCartButton = ({ handleAddToCart }: Props) => {
  return (
    <button
      id="add-to-cart-btn"
      type="button"
      className="outline-none flex justify-center items-center rounded bg-[#6576FF] text-white py-1.5 px-2.5 text-sm"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
