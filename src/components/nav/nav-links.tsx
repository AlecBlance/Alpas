import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

const NavLinks = () => {
  return (
    <ul className="flex">
      <li>
        <Link href="/about" className={buttonVariants({ variant: "ghost" })}>
          About
        </Link>
      </li>
      <li>
        <Link href="/api" className={buttonVariants({ variant: "ghost" })}>
          API
        </Link>
      </li>
      <li>
        <ModeToggle />
      </li>
    </ul>
  );
};
export default NavLinks;
