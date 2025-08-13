import ProductCard from "@/components/ui/ProductCard";
import hair1 from "@/assets/hair1.png";
import hair2 from "@/assets/hair2.png";
import Pill from "@/components/ui/Pill";

const OurProducts = () => {
  return (
    <div className="flex items-center flex-col gap-10 md:px-25 px-12 py-12">
      <div className="w-full flex justify-between flex-col lg:flex-row gap-6">
        <h2 className="border-b-2 pb-4 w-fit  text-2xl font-playfair-display uppercase">
          Our Products
        </h2>

        <div className="flex gap-2.5 flex-wrap">
          <Pill>All</Pill>
          <Pill selected>Sleek fusion</Pill>
          <Pill>Curl Fusion</Pill>
          <Pill>Prep+Purify Shampoo</Pill>
          <Pill>Tools</Pill>
          <Pill>Elixir Serum</Pill>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 gap-y-8 justify-center w-fi">
        
        <ProductCard>
          <img src={hair1} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair2} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair1} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair2} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair1} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair1} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair2} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair2} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair1} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair1} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair2} alt="" />
        </ProductCard>
        <ProductCard>
          <img src={hair2} alt="" />
        </ProductCard>
      </div>
    </div>
  );
};

export default OurProducts;
