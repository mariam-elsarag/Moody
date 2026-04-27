import Navbar from "@/app/_components/layout/Navbar";
import SidebarNavigation from "@/app/_components/ui/SidebarNavigation";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <section className="flex items-start">
      <SidebarNavigation />
      <div className="min-h-full flex flex-col">
        <div>
          <Navbar />
          {children}
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
