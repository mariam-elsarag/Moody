import SidebarNavigation from "@/app/_components/ui/SidebarNavigation";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <section className="flex items-start">
      <SidebarNavigation />
      <div>{children}</div>
    </section>
  );
};

export default ProfileLayout;
