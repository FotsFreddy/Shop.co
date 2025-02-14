import { Link } from "react-router";
import ProductCard, { ProductCardProps } from "../../ui/productCard/ProductCard";

interface ProductSectionProps {
  sectionTitle: string;
}

const newArrivals: Array<ProductCardProps> = [
  {
    imageSrc: "/images/productImages/t-shirts/t-shirt-1.png",
    title: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
  },
  {
    imageSrc: "/images/productImages/jeans/jean-1.png",
    title: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    rating: 3.5,
    discount: 20,
  },
  {
    imageSrc: "/images/productImages/t-shirts/t-shirt-3.png",
    title: "Checkered Shirt",
    price: 180,
    rating: 4.5,
  },
  {
    imageSrc: "/images/productImages/t-shirts/t-shirt-4.png",
    title: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    rating: 4.5,
    discount: 30,
  },
];

const topSelling: Array<ProductCardProps> = [
  {
    imageSrc: "/images/productImages/t-shirts/t-shirt-4.png",
    title: "Vertical Striped Shirt",
    price: 210,
    oldPrice: 232,
    rating: 4.5,
    discount: 20,
  },
  {
    imageSrc: "/images/productImages/t-shirts/t-shirt-5.png",
    title: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.5,
  },
  {
    imageSrc: "/images/productImages/shorts/short-1.png",
    title: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
  },
  {
    imageSrc: "/images/productImages/jeans/jean-2.png",
    title: "Faded Skinny Jeans",
    price: 210,
    rating: 4.5,
  },
];

export default function ProductSection({ sectionTitle }: ProductSectionProps) {
  const arrayToMap = sectionTitle === "NEW ARRIVALS" ? newArrivals : topSelling;
  return (
    <section>
      <h2 className="text-4xl font-[1000] text-center">{sectionTitle}</h2>
      <div className="grid grid-flow-col gap-5 px-4 py-4 overflow-x-auto snap-x snap-proximity scroll-pr-4 md:pb-7 md:pt-10 md:px-12 md:content-center">
        {arrayToMap.map((item, index) => {
          return <ProductCard key={index} {...item} />;
        })}
      </div>
      <Link to={"/Category"}>
        <button
          className="w-[95%] text-nowrap px-16 py-2 rounded-full border-gray-400 border-2 block m-auto cursor-pointer relative overflow-hidden
                     sm:w-min
                     hover:text-white
                     after:bg-black after:-z-10 after:absolute after:left-0 after:top-0 after:w-full after:h-full after:transform after:transition-transform after:-translate-x-[110%] after:duration-500 after:ease-in-out hover:after:translate-x-0"
        >
          View All
        </button>
      </Link>
    </section>
  );
}
