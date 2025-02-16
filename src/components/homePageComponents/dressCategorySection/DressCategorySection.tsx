import { Link } from "react-router";

interface DressStyleProps {
    item:{imageSrc:string, title:string};
    colspan?:boolean;
}
const dressStyle:Array<{imageSrc:string, title:string}> = [
    {
        imageSrc: "/images/dressStyle/casual.png",
        title: "Casual",
    },
    {
        imageSrc: "/images/dressStyle/formal.png",
        title: "Formal",
    },
    {
        imageSrc: "/images/dressStyle/party.png",
        title: "Party",
    },
    {
        imageSrc: "/images/dressStyle/gym.png",
        title: "Gym",
    },
]
export default function DressCategorySection() {
    const tab = new Set([1, 2]);
  return (
    <section className="bg-[#F0F0F0] rounded-3xl px-4 py-4 mx-4 my-10 md:p-10 md:mt-14 md:mx-12">
      <h2 className="text-4xl text-center font-[1000] pb-4 max-sm:w-4/5 m-auto md:pb-9">BROWSE BY DRESS STYLE</h2>
      <div className="grid grid-flow-row gap-4 md:grid-cols-3 ">
        {dressStyle.map((item, index) => (
          <DressStyle item={item} key={index} colspan={tab.has(index)} />
        ))}
      </div>
    </section>
  );
}

function DressStyle({item, colspan}:DressStyleProps) {
    return (
       <div className={`relative rounded-3xl overflow-hidden h-52 cursor-pointer md:h-72 ${colspan ? "md:col-span-2" : ""}`}>
        <Link to={"/category"} aria-label={`Browse ${item.title} style`}>
            <img src={item.imageSrc} alt={item.title} className="w-full h-full  transition-all duration-300 object-center hover:scale-110"/>
            <h4 className="absolute top-5 left-5 font-semibold md:text-2xl md:font-bold">{item.title}</h4>
        </Link>
       </div>
    );
}