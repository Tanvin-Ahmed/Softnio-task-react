import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { data } from "../data/data";
import { useCallback, useState } from "react";
import ColorButton from "./buttons/color-button";
import SizeButton from "./buttons/size-button";
import { FaRegHeart } from "react-icons/fa";
import CountButton from "./buttons/count-button";
import AddToCartButton from "./buttons/add-to-cart-button";
import CheckoutButton from "./buttons/checkout-button";
import CartModal from "./modal/cart-modal";

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cart, setCart] = useState<CartList>([]);
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    title: data.title,
    size: data.sizes[0],
    price: data.prices[0],
    color: Object.values(data.colors[0])[0],
    count: 1,
    image: `./assets/${Object.keys(data.colors[0])[0]}.png`,
  });

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleUpdateSelectedItem = useCallback((obj: Partial<SelectedItem>) => {
    setSelectedItem((state) => ({ ...state, ...obj }));
  }, []);

  const handleAddToCart = useCallback(() => {
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.color === selectedItem.color && item.size === selectedItem.size
    );

    if (existingItemIndex !== -1) {
      // Item already exists in cart, update the count and price
      const existingItem = cart[existingItemIndex];
      existingItem.count += selectedItem.count;

      const cartData = [...cart];
      cartData.splice(existingItemIndex, 1, existingItem);

      setCart(cartData);
    } else {
      setCart((state) => [...state, { ...selectedItem }]);
    }
  }, [selectedItem, cart]);

  return (
    <div className="lg:grid grid-cols-12 gap-4 space-y-20 lg:space-y-0 relative">
      <section className="col-span-6">
        <img
          src={selectedItem.image}
          className="w-full h-full rounded"
          alt="thumbnail"
        />
      </section>
      <section className="col-span-6 w-full h-full flex flex-col justify-center">
        <h1 className="font-bold text-4xl text-[#364A63]">
          Classy Modern Smart watch
        </h1>
        <div className="flex items-center gap-1.5 mt-5">
          <FaStar className="text-[#FFD200]" />
          <FaStar className="text-[#FFD200]" />
          <FaStar className="text-[#FFD200]" />
          <FaRegStarHalfStroke className="text-[#FFD200]" />
          <FaRegStar className="text-[#FFD200]" />
          <span className="text-[#8091A7]">(2 Reviews)</span>
        </div>

        <div className="mt-8 space-y-5">
          <div className="flex items-center gap-2">
            <p className="text-[#8091A7] text-xl line-through">
              ${selectedItem.price.actualPrice}.00
            </p>
            <p className="text-[#6576FF] font-bold text-2xl">
              ${selectedItem.price.offerPrice}.00
            </p>
          </div>

          <p className="text-[#8091A7]">
            I must explain to you how all this mistaken idea of denoun cing ple
            praising pain was born and I will give you a complete account of the
            system, and expound the actual teaching.
          </p>

          <div className="flex items-center gap-5">
            <div>
              <p className="text-[#8091A7] text-sm">Type</p>
              <p className="text-[#364A63] font-bold text-base">Watch</p>
            </div>
            <div>
              <p className="text-[#8091A7] text-sm">Model Number</p>
              <p className="text-[#364A63] font-bold text-base">
                Forerunner 290XT
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-lg text-[#364A63] font-bold">Band Color</p>
            <div className="flex items-center gap-4 h-5">
              {data.colors
                .map((color) => Object.values(color)[0])
                .map((color, index) => (
                  <ColorButton
                    key={index}
                    color={color}
                    selectedItem={selectedItem}
                    update={handleUpdateSelectedItem}
                  />
                ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-lg text-[#364A63] font-bold">Wrist Size</p>
            <div className="flex items-center gap-4">
              {data.sizes.map((size, index) => (
                <SizeButton
                  key={size}
                  size={size}
                  price={data.prices[index]}
                  update={handleUpdateSelectedItem}
                  selectedItem={selectedItem}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <CountButton update={setSelectedItem} count={selectedItem.count} />
            <AddToCartButton handleAddToCart={handleAddToCart} />
            <FaRegHeart className="text-[#6576FF] cursor-pointer text-xl" />
          </div>
        </div>
      </section>

      <CheckoutButton
        show={!!cart.length && !isModalOpen}
        count={cart.reduce((prev, curr) => prev + curr.count, 0)}
        setIsModalOpen={setIsModalOpen}
      />

      <CartModal
        cartData={cart}
        setCart={setCart}
        open={isModalOpen}
        close={handleCloseModal}
      />
    </div>
  );
};

export default Details;
