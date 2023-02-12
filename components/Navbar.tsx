import Image from "next/image";
import Link from "next/link";

import logo from "@public/sportas-logo.webp";

const Navbar = () => (
  <nav className="flex items-center justify-between p-4">
    <Link href="/">
      <Image src={logo} alt="Sportas" width={96} height={35} />
    </Link>
    <ul className="flex flex-row items-center gap-5 text-sm">
      <li>
        <Link href="">Add your game</Link>
      </li>
      <li>
        <Link href="" target="_blank">
          Store 🛍️
        </Link>
      </li>
      <li>
        <Link href="">Find a game</Link>
      </li>
      <li>
        <Link href="">Refer friends 💰</Link>
      </li>
      <li>
        <button className="rounded-3xl border-2 border-primary px-6 py-1 text-xs font-medium text-primary">
          Login
        </button>
      </li>
      <li>
        <button className="rounded-3xl border-2 border-primary px-6 py-1 text-xs font-medium text-primary">
          Sign up
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
