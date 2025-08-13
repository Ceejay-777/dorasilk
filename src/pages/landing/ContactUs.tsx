import { LoginForm } from "@/components/login-form";

const ContactUs = () => {
  return (
    <div className="px-25 py-12">
      <div className="flex items-center justify-around">
        <h2
          className="bg-gradient-to-r from-gold-2  to-white-1
           bg-clip-text text-transparent text-[100px] leading-[116px] font-medium font-playfair-display"
        >
          Contact us
        </h2>
        <LoginForm className="w-[45%]" />
      </div>
    </div>
  );
};

export default ContactUs;
