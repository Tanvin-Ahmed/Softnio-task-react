import { Dispatch, SetStateAction } from "react";
import { data } from "../../data/data";
import { cn } from "../../libs/utils";

interface Props {
  cartData: CartList;
  open: boolean;
  close: () => void;
  setCart: Dispatch<SetStateAction<CartList>>;
}

const CartModal = ({ cartData, open, close, setCart }: Props) => {
  return (
    <div
      onClick={close}
      className={cn(
        "fixed inset-0 -top-20 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300",
        {
          "opacity-100 visible": open,
          "opacity-0 invisible": !open,
        }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "bg-white text-[#364A63] w-4/5 max-w-2xl rounded-lg p-6 relative transform transition-transform duration-300 max-h-[80vh] overflow-y-auto",
          {
            "translate-y-0 scale-100": open,
            "translate-y-10 scale-95": !open,
          }
        )}
      >
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-96 overflow-auto">
            <thead>
              <tr>
                <th className="border-b border-gray-300 p-2 font-normal text-[#8091A7]">
                  Item
                </th>
                <th className="border-b border-gray-300 p-2 font-normal text-[#8091A7]">
                  Color
                </th>
                <th className="border-b border-gray-300 p-2 font-normal text-[#8091A7]">
                  Size
                </th>
                <th className="border-b border-gray-300 p-2 font-normal text-[#8091A7]">
                  Qnt
                </th>
                <th className="border-b border-gray-300 p-2 font-normal text-[#8091A7]">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => {
                const colorName = Object.keys(
                  data.colors.find(
                    (colorObj) => Object.values(colorObj)[0] === item.color
                  )!
                )[0];

                return (
                  <tr key={index}>
                    <td className="border-b border-gray-200 p-2 flex items-center gap-2">
                      <img
                        src={item.image}
                        className="w-10 h-10 rounded"
                        alt="product"
                      />
                      <span>{item.title}</span>
                    </td>
                    <td className="border-b border-gray-200 p-2 capitalize">
                      {colorName}
                    </td>
                    <td className="border-b border-gray-200 p-2 uppercase font-bold">
                      {item.size}
                    </td>
                    <td className="border-b border-gray-200 p-2 uppercase font-bold">
                      {item.count}
                    </td>
                    <td className="border-b border-gray-200 p-2 font-bold">
                      ${item.price.offerPrice * item.count}.00
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td className="p-2 capitalize font-bold">total</td>
                <td className="p-2"></td>
                <td className="p-2"></td>
                <td className="p-2 capitalize font-bold">
                  {cartData.reduce((prev, curr) => prev + curr.count, 0)}
                </td>
                <td className="p-2 capitalize font-bold">
                  $
                  {cartData.reduce(
                    (prev, curr) => prev + curr.price.offerPrice * curr.count,
                    0
                  )}
                  .00
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={close}
            className="py-1 px-2 text-[13px] sm:py-2 sm:px-4 bg-white border text-[#8091A7] rounded shadow-md hover:bg-gray-100 transition duration-300"
          >
            Continue Shopping
          </button>
          <button
            onClick={() => {
              close();
              setCart([]);
            }}
            className="py-1 px-2 text-[13px] sm:py-2 sm:px-4 bg-[#6576FF] text-white rounded shadow-md hover:bg-[#6576FA] transition duration-300"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
