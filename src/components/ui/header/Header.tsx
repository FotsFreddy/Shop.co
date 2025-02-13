import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "../logo/Logo";
import Input from "../input/Input";

interface mobileNavBarProps {
  dropDown: boolean;
}
interface NavItemProps {
  NavItem: string;
}

export default function Header() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <header>
      <Banner />
      <div className="flex justify-between items-center p-2 md:justify-center md:gap-12">
        <div className="flex gap-3 items-center justify-center text-nowrap sm:gap-3 md:gap-5">
          <Menu
            className="z-50 cursor-pointer sm:w-9 sm:h-w-9 md:hidden"
            onClick={() => setDropDown(!dropDown)}
          />
          <Logo />
          <MobileNavBar dropDown={dropDown} />
          <NavBar />
        </div>
        <div className="flex items-center justify-center gap-3 sm:w-2/5">
          <SearchForm />
          <ShoppingCart className="cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
function Banner() {
  return (
    <p className="bg-black text-white text-center text-sm p-1 sm:text-lg">
      Sign up and get 20% off to your first order.{" "}
      <Link to={"/"} className="underline underline-offset-2">
        Sign Up Now
      </Link>
    </p>
  );
}
function NavBar() {
  return (
    <nav className="hidden md:block">
      <ul className="flex gap-5">
        <li>
          <Navitem NavItem="Shop" />
        </li>
        <li>
          <Navitem NavItem="On sale" />
        </li>
        <li>
          <Navitem NavItem="New Arrivals" />
        </li>
        <li>
          <Navitem NavItem="Brands" />
        </li>
      </ul>
    </nav>
  );
}
function MobileNavBar({ dropDown }: mobileNavBarProps) {
  return (
    <div
      className={`md:hidden fixed inset-0 backdrop-blur-md bg-white/40 z-30 w-full flex flex-col items-center justify-center transition-transform duration-500 ${
        dropDown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <ul className="flex flex-col items-center justify-center gap-5 text-3xl">
        <li>
          <Navitem NavItem="Shop" />
        </li>
        <li>
          <Navitem NavItem="On sale" />
        </li>
        <li>
          <Navitem NavItem="New Arrivals" />
        </li>
        <li>
          <Navitem NavItem="Brands" />
        </li>
      </ul>
    </div>
  );
}
function Navitem({ NavItem }: NavItemProps) {
  return (
    <NavLink
      to={"#"}
      className=" after:block after:h-0.5 after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full"
    >
      {NavItem}
    </NavLink>
  );
}
function SearchForm() {
  return (
    <form action=""method="get" className={`sm:w-full`}>
      <div className="relative">
        <Search
          className={`cursor-pointer left-2 top-3 sm:absolute sm:text-gray-400 md:pointer-events-none`}
        />
        <Input
          inputType="search"
          inputPlaceholder="Search for products..."
          inputStyle={`hidden w-full bg-[#f0f0f0] rounded-full px-9 py-3 w-full sm:block`}
        />
      </div>
    </form>
  );
}
