import { CheckCircle2, Star } from "lucide-react";

interface ReviewProps {
  rating: number;
  customerName: string;
  review: string;
  datePosted?: string;
}

export default function Reviews({ rating, customerName, review }: ReviewProps) {
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-6 w-[310px] snap-center max-w-[370px] md:snap-start">
      <div className="flex gap-1"> {/* stars */}
        {Array.from({ length: rating }, (_, index) => (
          <Star key={index} className="text-amber-300 fill-amber-300" />
        ))}
      </div>
      <h4 className="flex gap-1 font-semibold py-2">
        {customerName}
        <CheckCircle2 className="text-white fill-green-500" />
      </h4>
      <p>{review}</p>
    </div>
  );
}
