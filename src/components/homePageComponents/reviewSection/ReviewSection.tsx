import { MoveLeft, MoveRight } from "lucide-react";
import Review from "../../ui/review/Review";
import { useRef } from "react";

const reviews = [
  {
    customerName: "Sarah M.",
    rating: 5,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shopco. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    customerName: "Alex K.",
    rating: 5,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    customerName: "James L.",
    rating: 5,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    customerName: "Emma W.",
    rating: 5,
    review:
      "This website is super easy to navigate! The filtering options are intuitive, and I found exactly what I was looking for within minutes. Checkout was smooth too!",
  },
  {
    customerName: "Daniel R.",
    rating: 4,
    review:
      "I love the modern design and clean layout. The only thing I'd suggest improving is the loading speed on some pages, but overall a great shopping experience!",
  },
  {
    customerName: "Sophia M.",
    rating: 5,
    review:
      "Amazing customer service! I had an issue with my order, and they resolved it within hours. The website is well-structured and visually appealing.",
  },
  {
    customerName: "Michael B.",
    rating: 4,
    review:
      "Great product selection and reasonable prices. I wish there were more payment options, but everything else about the website is fantastic!",
  },
  {
    customerName: "Lily T.",
    rating: 5,
    review:
      "The website runs smoothly on both mobile and desktop. I appreciate the minimalistic design and easy checkout process. Highly recommend!",
  },
  {
    customerName: "Liam W.",
    rating: 5,
    review: "Finding clothes that align with my personal style used to be a challenge until I discovered Shopco. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    customerName: "Isabella D.",
    rating: 5,
    review: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shopco. The selection of clothes is not only diverse but also on-point with the latest trends."
  },
  {
    customerName: "Noah J.",
    rating: 4,
    review: "The quality of Shopco's products is fantastic! My only complaint is that some items sell out too fast. Other than that, I absolutely love shopping here."
  },
  {
    customerName: "Charlotte M.",
    rating: 5,
    review: "Fast delivery and top-notch customer service! I had an issue with my order, but Shopco resolved it quickly. The clothes fit perfectly, and the material is premium."
  },
  {
    customerName: "Ethan B.",
    rating: 4,
    review: "Shopco's designs are stylish and trendy! The only reason I'm giving 4 stars instead of 5 is that I wish they had more size options available for petite frames."
  },
  {
    customerName: "Ava S.",
    rating: 5,
    review: "Incredible shopping experience! The website is easy to navigate, and the product images are true to life. I’ll definitely be coming back for more."
  },
  {
    customerName: "Mason R.",
    rating: 4,
    review: "Great collection and reasonable prices! Some items took a bit longer to arrive, but overall, I'm happy with my purchase."
  }
];

export default function ReviewSection() {
  const carousselRef = useRef<HTMLDivElement | null>(null);
  return (
    <section className="py-12">
      <div className="flex justify-between px-4 md:px-12">
        <h2 className="text-4xl font-[1000]">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-end gap-4">
          <MoveLeft  className="hover:cursor-pointer" onClick={() => move(-300, carousselRef)} aria-label="Scroll reviews left"/>
          <MoveRight className="hover:cursor-pointer" onClick={() => move(300, carousselRef)} aria-label="Scroll reviews right"/>
        </div>
      </div>
      <div
        ref={carousselRef}
        className="grid grid-flow-col gap-4 overflow-x-scroll snap-x snap-proximity px-4 pt-7 md:pt-12 md:px-12 md:overflow-x-hidden md:scroll-pl-12"
      >
        {reviews.map((item, index) => {
          return <Review key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

function move(distance: number, carousselRef: React.RefObject<HTMLDivElement | null> ) {
  if (carousselRef.current) {
    carousselRef.current.scrollLeft += distance;      
  }
}
