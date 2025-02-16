import { Link } from "react-router";

export default function HeroSection() {
  return (
    <section className="bg-[#F0F0F0] grid grid-flow-row md:grid-cols-2 lg:px-12 xl:flex xl:relative">
      <div className="pl-4 pt-10 sm:w-[80%] max-md:pr-4 max-lg:mx-auto md:py-14 xl:z-40 xl:w-[50%] xl:absolute">
        <h1 className="text-3xl font-[1000] lg:text-5xl xl:text-7xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="font-light text-sm py-3 lg:text-lg xl:w-[80%]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link to={"/category"}>
          <button
            type="button"
            className="bg-black text-white text-xl text-nowrap px-24 py-3 max-md:w-full cursor-pointer rounded-full 
                        active:scale-90
                        md:px-16"
          >
            Shop Now
          </button>
        </Link>
      <StatisticSection />
      </div>
      <div className="overflow-hidden relative xl:col-span-2 xl:row-start-1">
        <img src="/images/heroSection/heroSection.png" alt="mannequin" className="object-cover h-full xl:hidden"/>
        <img src="/images/heroSection/heroSection-lg.png" alt="mannequin" className="hidden h-full w-[95%] mx-auto xl:block"/>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-36 left-10 xl:top-72 xl:left-[50%]">
<path d="M22 0C22.7469 11.8271 32.1728 21.2531 44 22C32.1728 22.7469 22.7469 32.1728 22 44C21.2531 32.1728 11.8271 22.7469 0 22C11.8271 21.2531 21.2531 11.8271 22 0Z" fill="black"/>
        </svg> {/* small star */}

        <svg width="76" height="76" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-10 right-10 xl:top-24 xl:right-36">
<path d="M38 0C39.2901 20.4286 55.5712 36.71 76 38C55.5712 39.2901 39.2901 55.5712 38 76C36.71 55.5712 20.4286 39.2901 0 38C20.4286 36.71 36.71 20.4286 38 0Z" fill="black"/>
        </svg> {/* big star */}

      </div>
    </section>
  );
}

function StatisticSection(){
    return (
        <section className="grid grid-cols-2 justify-items-center gap-3 text-sm font-light mt-5 md:max-md:gap-0 md:grid-cols-3 md:mt-7">
            <p className="w-full border-r border-gray-400 max-md:text-center">
                <span className="font-bold text-3xl w-full lg:text-4xl">200+</span>
                <br />
                 International Brands</p>
            <p className="w-full md:text-center md:border-r border-gray-400 max-md:text-center">
                <span className="font-bold text-3xl lg:text-4xl">2,000+</span>
                <br />
                 High-Qulaity Products</p>
            <p className="w-full max-md:text-center max-md:col-span-2">
                <span className="font-bold text-3xl lg:text-4xl">30,000+</span>
                <br />
                 Happy Customers</p>
        </section>
    );
}
