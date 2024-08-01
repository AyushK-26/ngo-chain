import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full py-12">
      <h1>NGO CHAIN</h1>

      <Link href="/signup" className={buttonVariants({ variant: "custom" })}>
        Register your NGO
      </Link>
    </nav>
  );
};

export default Navbar;
