import {Heart, Plus} from "lucide-react"
import Rating from "./Rating";
import type { ChildrenProps } from "@/types";

const ProductCard:React.FC<ChildrenProps> = ({children}) => {
  return (
    <div className="p-4 rounded-2xl bg-white min-w-[250px] max-w-[295px] w-1/4 flex flex-col items-center gap-2">
      <div className="flex items-center justify-between w-full">
        <DiscountLabel></DiscountLabel>
        <Heart className="" size={24} color="black" strokeWidth={3}/>
      </div>

      <div>{children}</div>

      <div className="flex flex-col items-center gap-2.5 w-full">
        <p className="font-playfair-display text-sm text-gray-1">Local Brown Topa Pot</p>
        <Rating rating={3.5}/>
        <button className="flex items-center justify-center gap-4 border border-brown-1 py-2.5 w-full rounded-full text-brown-1 text-sm hover:scale-105 transition-transform duration-250 bg-white-1">
          <Plus/> Add to Cart
        </button>
      </div>
    </div>
  );
};

const DiscountLabel = () => {
  return (
    <div className="bg-red-1 p-1.5 pr-3 rounded-r-full rounded-l-[8px] font-semibold text-[10px] w-fit">
      50%
    </div>
  );
};

export default ProductCard;
