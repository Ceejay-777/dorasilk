import { LoginForm } from "@/components/login-form";

const ContactUs = () => {
  return (
    <div className="md:px-25 py-12 px-12">
      <div className="flex items-center justify-around flex-col lg:flex-row gap-8">
        <h2
          className="bg-gradient-to-r from-gold-2  to-white-1
           bg-clip-text text-transparent text-[100px] leading-[116px] font-medium font-playfair-display text-7xl md:text-[100px] md:leading-[116px] "
        >
          Contact us
        </h2>
        <LoginForm className="lg:w-[45%] w-full" />
      </div>
    </div>
  );
};

export default ContactUs;
