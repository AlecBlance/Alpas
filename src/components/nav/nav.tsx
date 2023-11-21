import Logo from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import NavLinks from "./nav-links";

const Nav = () => {
  return (
    <nav className="border-b py-3 px-2">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
};
export default Nav;
