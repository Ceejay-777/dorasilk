const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-start px-12 md:px-25 pt-12 sm:pt-36">
      <div className="max-w-[700px] flex items-start flex-col justify-center  gap-12">
        <h1 className="font-medium text-7xl md:text-[100px] leading-24 md:leading-[116px] font-playfair">
          The Science of Hair Revamp
        </h1>

        <p className="text-4xl">Starts here</p>

        <div className="flex justify-center items-center gap-3 w-fit">
          <button className="font-medium text-xs md:text-2xl py-3 px-6 h-full bg-gold-1 text-white hover:scale-105 transition-transform duration-250 ease-in-out rounded-md">
            Shop Now
          </button>

          <button className="font-medium text-xs md:text-2xl py-3 px-6 h-full bg-white text-deepbrown hover:scale-105 transition-transform duration-250 ease-in-out rounded-md">
            Tap to Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
