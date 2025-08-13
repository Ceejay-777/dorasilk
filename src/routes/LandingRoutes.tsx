import Landing from "@/pages/landing/Landing";
import LandingSharedLayout from "@/SharedLayout/LandingSharedLayout";
import { Routes, Route } from "react-router";

const LandingRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<LandingSharedLayout />}>
        <Route path="home" index element={<Landing />} />
      </Route>
    </Routes>
  );
};

export default LandingRoutes;
