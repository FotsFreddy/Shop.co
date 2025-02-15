import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
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
    <header className={`sticky top-0 z-50 bg-white shadow-md`}>
      <Banner />
      <div className="flex justify-between items-center p-2 md:justify-center md:gap-12">
        <div className="flex gap-3 items-center justify-center text-nowrap sm:gap-3 md:gap-5">
          <Menu
            className="z-50 cursor-pointer active:scale-90 sm:w-9 sm:h-w-9 md:hidden"
            onClick={() => setDropDown(!dropDown)}
            aria-label="Menu"
            tabIndex={0}
          />
          <Logo />
          <MobileNavBar dropDown={dropDown} />
          <NavBar />
        </div>
        <div className="flex items-center justify-center gap-3 sm:w-2/5">
          <SearchForm />
          <Link to={"/Category"}>
            <ShoppingCart
              className="cursor-pointer max-sm:w-8 active:scale-90 hover:text-gray-600 transition"
              aria-label="Shopping Cart"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
function Banner() {
  const [showBanner, setShowBanner] = useState(true);
  return (
    <div className={`bg-black text-white p-2 transition ${showBanner ? "block" : "hidden max-sm:block"}`}>
      <p className="text-center text-sm sm:text-lg">
        Sign up and get 20% off to your first order.{" "}
        <Link to={"/"} className="underline underline-offset-2">
          Sign Up Now
        </Link>
      </p>
      <X className="hidden sm:block cursor-pointer text-white absolute md:right-[14%] top-3 active:scale-90 sm:right-2"
        onClick={() => setShowBanner(!showBanner)}
        aria-label="Close Banner" 
      />
    </div>
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
  const [isVisible, setIsVisible] = useState(false); {/* invisible on mobile */}
  return (
    <form action="" method="get" className="sm:w-full">
      <div className="relative">
        {/* search icon */}
        <Search
          className={`cursor-pointer left-2 top-3 
            sm:absolute sm:text-gray-400 sm:pointer-events-none md:block
            hover:text-gray-600 transition ${isVisible?"hidden":""}`}
          onClick={() => setIsVisible(true)}
          aria-label="Search"
        />
        <Input
          inputType="search"
          inputPlaceholder="Search for products..."
          inputStyle={`w-full bg-[#f0f0f0] rounded-full sm:px-9 py-3 sm:block ${isVisible ? "pl-3 pr-8" : "hidden" }`}
        />
        {/* close icon */}
        <X className={`cursor-pointer absolute right-2 top-3 text-gray-400 w-5 ${isVisible?"block":"hidden"}`}
          onClick={() => setIsVisible(false)} 
          aria-label="Close Search Bar" 
        />
      </div>
    </form>
  );
}