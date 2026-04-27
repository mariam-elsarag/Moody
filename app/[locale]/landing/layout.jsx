import LandingNavbar from "@/app/_components/layout/LandingNavbar";

const layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#0F172A66] flex flex-col justify-between">
      <LandingNavbar />
      {children}
    </div>
  );
};

export default layout;
