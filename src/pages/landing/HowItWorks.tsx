import womanVideo from "@/assets/woman-video.jpg";
import play from "@/assets/play.png";

const HowItWorks = () => {
  return (
    <div className="py-12 flex justify-between items-center lg:px-25 px-12 flex-col gap-12 lg:flex-row">
      <div className="flex gap-12 flex-col lg:w-[45%]">
        <h2
          className="bg-gradient-to-r from-gold-2  to-white-1
           bg-clip-text text-transparent text-[100px] leading-[116px] font-medium font-playfair-display"
        >
          How it works
        </h2>
        <p className="text-3xl">4-step visual journey: </p>
        <ol className="text-3xl flex gap-5 flex-col">
          <li className="text-gold-2">1. Verify</li>
          <li>2. Prep</li>
          <li>3. Treat</li>
          <li>4. Seal</li>
        </ol>
      </div>

      <div className="lg:w-[45%] h-full rounded-t-4xl overflow-hidden relative group">
        <div className="w-full h-full absolute bg-gradient-to-t from-black/90 to-[#D9D9D9]/0 group-hover:block hidden" />
        <img
          src={play}
          alt=""
          className="group-hover:block hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hover:scale-105"
        />
        <img src={womanVideo} alt="" className="object-cover object-center" />
      </div>
    </div>
  );
};

export default HowItWorks;
