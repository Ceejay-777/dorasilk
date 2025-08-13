import Header from "@/components/navigation/Header";
import { Outlet } from "react-router";

const LandingSharedLayout = () => {
  return (
    <div className="">
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default LandingSharedLayout;
