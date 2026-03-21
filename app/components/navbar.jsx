// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-2 md:py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-xl md:text-3xl font-bold leading-none">
            Owen Baenen
          </Link>
        </div>

        <ul className="mt-0 flex w-auto flex-row flex-wrap items-center justify-end gap-1 text-[10px] opacity-100 max-h-screen md:mt-0 md:w-auto md:flex-row md:space-x-1 md:gap-0 md:text-sm" id="navbar-default">
          <li>
            <Link className="block px-2 py-1 md:px-4 md:py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-[10px] md:text-sm text-white transition-colors duration-300 hover:text-amber-500">ABOUT</div>
            </Link>
          </li>
          <li>
            <Link className="block px-2 py-1 md:px-4 md:py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-[10px] md:text-sm text-white transition-colors duration-300 hover:text-amber-500">PROJECTS</div></Link>
          </li>
          <li>
            <Link className="block px-2 py-1 md:px-4 md:py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-[10px] md:text-sm text-white transition-colors duration-300 hover:text-amber-500">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-2 py-1 md:px-4 md:py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-[10px] md:text-sm text-white transition-colors duration-300 hover:text-amber-500">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-2 py-1 md:px-4 md:py-2 no-underline outline-none hover:no-underline" href="/#contact"><div className="text-[10px] md:text-sm text-white transition-colors duration-300 hover:text-amber-500">CONTACT</div></Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
