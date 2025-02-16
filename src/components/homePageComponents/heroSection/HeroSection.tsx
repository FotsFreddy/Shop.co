import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="bg-[#F0F0F0] grid grid-flow-row md:grid-cols-2">
      <div className="pl-4 max-md:pr-4 pt-10 max-lg:mx-auto lg:pl-12 md:py-16 xl:py-24 xl:w-[70%]">
        <h1 className="text-4xl font-[1000] lg:text-5xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-light text-sm py-3 md:py-6">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to={"/Category"}>
          <button
            type="button"
            className="bg-black text-white text-xl text-nowrap px-24 py-3 max-sm:w-full cursor-pointer rounded-full 
                        active:scale-90
                        sm:px-16"
          >
            Shop Now
          </button>
        </Link>
        <StatisticSection />
      </div>
      <div className="overflow-hidden relative">
        <img src="/images/heroSection/heroSection.png" alt="" className="md:hidden"/>
        <img src="/images/heroSection/heroSection-lg.png" alt="" className="hidden md:block"/>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-36 left-10">
<path d="M22 0C22.7469 11.8271 32.1728 21.2531 44 22C32.1728 22.7469 22.7469 32.1728 22 44C21.2531 32.1728 11.8271 22.7469 0 22C11.8271 21.2531 21.2531 11.8271 22 0Z" fill="black"/>
        </svg>

        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-10">
<path d="M38 0C39.2901 20.4286 55.5712 36.71 76 38C55.5712 39.2901 39.2901 55.5712 38 76C36.71 55.5712 20.4286 39.2901 0 38C20.4286 36.71 36.71 20.4286 38 0Z" fill="black"/>
        </svg>

      </div>
    </section>
  );
}

function StatisticSection(){
    return (
        <section className="grid grid-cols-2 gap-4 py-3 max-w-lg sm:grid-cols-3 md:mt-7">
            <p className="text-sm font-light border-r border-gray-300">
                <span className="font-bold text-2xl lg:text-4xl">200+</span>
                <br />
                 International Brands</p>
            <p className="text-sm font-light border-gray-300 justify-self-center">
                <span className="font-bold text-2xl  lg:text-4xl">2,000+</span>
                <br />
                 High-Qulaity Products</p>
            <p className="text-sm font-light justify-self-center max-sm:col-span-2 md:pl-4 md:border-l md:border-gray-300">
                <span className="font-bold text-2xl lg:text-4xl">30,000+</span>
                <br />
                 Happy Customers</p>
        </section>
    );
}
