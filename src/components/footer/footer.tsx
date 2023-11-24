import Link from "next/link";
import Logo from "../ui/logo";

const Footer = () => {
  return (
    <div className="border-t py-3 px-2">
      <div className="max-w-5xl mx-auto">
        {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2"> */}
        <div className="flex flex-wrap gap-8 sm:flex-nowrap sm:justify-between">
          <div>
            <Logo />
            <p className="text-sm text-muted-foreground py-2">
              A search engine that scrapes{" "}
              <Link
                href="https://behance.net"
                className="font-bold hover:underline"
              >
                Behance
              </Link>{" "}
              for{" "}
              <Link
                href="https://figma.net"
                className="font-bold  hover:underline"
              >
                Figma
              </Link>{" "}
              prototypes. Created for faster and easier designs and assets
              reference.
            </p>
            <p className="text-sm">
              Built by{" "}
              <Link
                href="https://alecblance.com"
                className="font-bold text hover:underline"
              >
                Alec Blance
              </Link>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8 shrink-0 w-full sm:w-1/2">
            <div>
              <p className="font-bold">Built with</p>
              <ul className="text-sm space-y-2 pt-2 text-muted-foreground">
                <li>
                  <Link href="https://nextjs.org/" className="hover:underline">
                    NextJS
                  </Link>
                </li>
                <li>
                  <Link href="https://react.dev/" className="hover:underline">
                    React
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.typescriptlang.org/"
                    className="hover:underline"
                  >
                    Typescript
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://ui.shadcn.com/"
                    className="hover:underline"
                  >
                    shadcn/ui
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Contact</p>
              <ul className="text-sm space-y-2 pt-2 text-muted-foreground">
                <li>
                  <Link
                    href="mailto:blancealec1@gmail.com"
                    className="hover:underline"
                  >
                    Email
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/alecblance/"
                    className="hover:underline"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://alecblance.com"
                    className="hover:underline"
                  >
                    Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://facebook.com/alec.blance"
                    className="hover:underline"
                  >
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold">Pages</p>
              <ul className="text-sm space-y-2 pt-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
