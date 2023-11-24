import Logo from "@/components/ui/logo";
import { ModeToggle } from "@/components/ui/mode-toggle";
import NavLinks from "./nav-links";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="border-b py-3 px-2">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Nav;
