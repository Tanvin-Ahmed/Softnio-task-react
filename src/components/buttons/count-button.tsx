import { Dispatch, SetStateAction } from "react";
import { cn } from "../../libs/utils";

interface Props {
  update: Dispatch<SetStateAction<SelectedItem>>;
  count: number;
}

const CountButton = ({ update, count }: Props) => {
  return (
    <div className="inline-block">
      <div className="flex items-center gap-x-4 border border-[#8091A7] rounded m-0 p-0">
        <button
          id="decrement"
          type="button"
          className={cn(
            "m-0 h-8 w-8 outline-none flex justify-center items-center rounded-l text-[#8091A7] text-lg border-r border-[#8091A7]",
            {
              "cursor-not-allowed": count === 1,
            }
          )}
          onClick={() =>
            update((state) => ({
              ...state,
              count: state.count === 1 ? state.count : state.count - 1,
            }))
          }
        >
          -
        </button>
        <p id="count" className="text-[#364A63] text-lg">
          {count}
        </p>
        <button
          id="increment"
          type="button"
          className="m-0 h-8 w-8 outline-none flex justify-center items-center rounded-r text-[#8091A7] text-lg border-l border-[#8091A7]"
          onClick={() =>
            update((state) => ({ ...state, count: state.count + 1 }))
          }
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CountButton;
