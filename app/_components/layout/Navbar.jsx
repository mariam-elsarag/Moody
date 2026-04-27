import LanguageSwitcher from "../ui/LanguageSwitcher";
import Logo from "../ui/Logo";

const Navbar = () => {
  return (
    <div
      className={`Container flex_center justify-between gap-2 border-b border-[#1E293B99] bg-background/80 h-[60px]`}
    >
      <Logo />

      <div>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
