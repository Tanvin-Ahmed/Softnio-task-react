import { Dispatch, SetStateAction } from "react";
import { cn } from "../../libs/utils";

interface Props {
  show: boolean;
  count: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}

const CheckoutButton = ({ show, count, setIsModalOpen }: Props) => {
  return (
    <button
      type="button"
      className={cn(
        "fixed bottom-[-50px] left-1/2 transform -translate-x-1/2 outline-none flex justify-center items-center gap-2 rounded-3xl bg-[#FFBB5A] text-[#364A63] py-2 px-4 text-sm shadow-lg font-semibold transition-all duration-300 ease-in-out",
        {
          "bottom-[16px]": show,
        }
      )}
      onClick={() => setIsModalOpen(true)}
    >
      Checkout{" "}
      <span className="bg-white text-[#364A63] px-1.5 py-0.5 rounded-md">
        {count}
      </span>
    </button>
  );
};

export default CheckoutButton;
