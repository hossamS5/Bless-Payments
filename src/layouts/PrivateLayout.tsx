import { Outlet } from "react-router-dom";
import { Header } from "../components/molecules/Header";

export const PrivateLayout = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Header />
      <div className="container mx-auto p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};
