import hairmaking from "@/assets/hairmaking.jpg";

const WhoWeAre = () => {
  return (
    <div className="py-12 flex justify-between items-center px-25">
      <div className="w-[45%] flex flex-col gap-12">
        <h2
          className="bg-gradient-to-r from-gold-2 to-white-1
               bg-clip-text text-transparent text-[100px] leading-[116px] font-medium font-playfair-display"
        >
          Who we are
        </h2>

        <div className="bg-white-1 text-black text-[28px] leading-[45px] font-light p-6 rounded-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            odit. Nesciunt adipisci architecto, facere quo inventore odio
            aliquam sunt quia exercitationem consequuntur possimus harum atque
            rerum obcaecati incidunt nisi magnam porro deleniti? Dicta beatae
            dignissimos quos optio atque.
          </p>
        </div>
      </div>

      <div className="w-[45%] rounded-4xl overflow-hidden relative group h-[560px] border">
        <img
          src={hairmaking}
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
