import JournalCard from "@/components/ui/JournalCard";
import Pill from "@/components/ui/Pill";
import hairmaking from "@/assets/hairmaking.jpg";
import journal1 from "@/assets/journal1.png"
import journal2 from "@/assets/journal2.png"
import journal3 from "@/assets/journal3.png"
import journal4 from "@/assets/journal4.png"
import journal5 from "@/assets/journal5.png"

const RevampJournal = () => {
  return (
    <div className="flex items-center flex-col gap-10 py-12 px-25">
      <div className="w-full flex justify-between flex-col lg:flex-row gap-6">
        <h2 className="border-b-2 pb-4 w-fit  text-2xl font-playfair-display uppercase">
          The Revamp Journal
        </h2>

        <div className="flex gap-2.5 flex-wrap">
          <Pill>All</Pill>
          <Pill selected>The Revamp journal</Pill>
          <Pill>Industry Trends</Pill>
          <Pill>Dorasilk Behind The Scenes</Pill>
        </div>
      </div>

      <div className="flex flex-wrap gap-2.5 gap-y-8 justify-center">
        <JournalCard>
          <img src={hairmaking} alt="" className="object-cover object-center" />
        </JournalCard>
        <JournalCard>
          <img src={journal1} alt="" className="object-cover object-center" />
        </JournalCard>
        <JournalCard>
          <img src={journal2} alt="" className="object-cover object-center" />
        </JournalCard>
        <JournalCard>
          <img src={journal3} alt="" className="object-cover object-center" />
        </JournalCard>
        <JournalCard>
          <img src={journal4} alt="" className="object-cover object-center" />
        </JournalCard>
        <JournalCard>
          <img src={journal5} alt="" className="object-cover object-center" />
        </JournalCard>
      </div>
    </div>
  );
};

export default RevampJournal;
