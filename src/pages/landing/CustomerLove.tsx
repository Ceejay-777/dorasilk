import CustomerCard from "@/components/ui/CustomerCard";
import david from "@/assets/david-avatar.png";
import john from "@/assets/john-avatar.png";

const CustomerLove = () => {
  return (
    <div className="py-12 bg-white-2 lg:px-25 px-12">
      <h2 className="font-medium text-[60px] font-playfair-display text-deepbrown">
        Customer Love
      </h2>

      <div className="grid grid-cols-1 gap-10 mt-10 lg:grid-cols-3">
        <CustomerCard
          styles="bg-white-1 text-deepbrown"
          info="Real-time chat monitoring has transformed our customer support. We respond to queries instantly, and our customers love it"
          name="Rachel"
          role="Support Manager"
          quoteColor="text-deepbrown"
        />

        <CustomerCard
          styles="bg-gold-1 text-white-1 lg:col-span-2"
          info="The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns"
          name="David"
          role="Freelancer"
          image={david}
          quoteColor="text-gold-2"
        />

        <CustomerCard
          styles="bg-gradient-to-r from-[#1A1102] to-[#482E04] text-white-1"
          info="The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns"
          name="David"
          role="Freelancer"
          image={david}
          quoteColor="text-white-1"
        />

        <CustomerCard
          styles="bg-white-1 text-deepbrown"
          info="The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns"
          name="John"
          role="Freelancer"
          image={john}
          quoteColor="text-deepbrown"
        />

        <CustomerCard
          styles="bg-white text-black"
          info="The live chat feature has increased our sales conversions by 30%. We can engage with customers in real-time and address their concerns"
          name="Micheal"
          role="CEO"
          quoteColor="text-black"
        />
      </div>
    </div>
  );
};

export default CustomerLove;
