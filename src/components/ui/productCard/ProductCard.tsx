import { Star, StarHalf } from "lucide-react";
export interface ProductCardProps{
    imageSrc: string;
    title: string;
    price: number;
    oldPrice?: number;
    rating: number;
    discount?: number;
}
export default function ProductCard({imageSrc, title, price, oldPrice, rating,  discount}:ProductCardProps) {
  return (
    <figure className="snap-center justify-self-center">
      <div className="w-[200px] h-[200px] rounded-3xl overflow-hidden mb-1 cursor-pointer md:w-[320px] md:h-[320px]">
        <img src={imageSrc} alt={title} className="w-full h-full transition-all duration-300 hover:scale-110"/>
      </div>
      <figcaption>
        <h4 className="font-bold md:text-xl">{title}</h4>
        <p>
          <span className="flex gap-1"> {/* stars and rating */}
          {Array.from({ length: rating }, (_, index) => (
                <Star key={index} className="text-amber-300 fill-amber-300 w-[20px]" />
              ))}
            {rating % 1 > 0 ? <StarHalf className="text-amber-300 fill-amber-300 w-[20px]"/> : ""}
          <span>{rating}<span className="font-light">/5</span></span>
          </span>
        </p>
        <p className="text-2xl flex items-center gap-1 md:gap-2"> {/* price */}
          <span className="font-semibold">{`$${price}`}</span>
          <span className="line-through text-gray-500 ">{oldPrice?`$${oldPrice}`:""}</span>
          <span className={`text-xs text-red-600 bg-red-100 rounded-full px-2 py-1 ${discount ? "block":"hidden"}`}>{discount && `-${discount}%`}</span>
        </p>
      </figcaption>
    </figure>
  );
}
