import { Mail } from "lucide-react";
import Input from "../input/Input";
import SubmitButton from "../submitButton/SubmitButton";
import { Link } from "react-router";

interface footerLinksProps {
  category: string;
  link1: string;
  link2: string;
  link3: string;
  link4: string;
  index?: number;
}
interface FooterPaymentMethodsProps {
  paymentSrc: string;
  index?: number;
}

const footerLinks: Array<footerLinksProps> = [
  {
    category: "COMPANY",
    link1: "About",
    link2: "Features",
    link3: "Works",
    link4: "Career",
  },
  {
    category: "HELP",
    link1: "Customer Support",
    link2: "Delivery Details",
    link3: "Terms & Conditions",
    link4: "Privacy Policy",
  },
  {
    category: "FAQ",
    link1: "Account",
    link2: "Manage Delivery",
    link3: "Orders",
    link4: "Payments",
  },
  {
    category: "RESOURCES",
    link1: "Free eBooks",
    link2: "Development Tutorial",
    link3: "How to - Blog",
    link4: "Youtube Playlist",
  },
];

const footerPayments: Array<string> = [
  "/images/footerPaymentMethods/visa_icon.svg",
  "/images/footerPaymentMethods/mastercard_icon.svg",
  "/images/footerPaymentMethods/paypal_icon.svg",
  "/images/footerPaymentMethods/apple_pay_icon.svg",
  "/images/footerPaymentMethods/google_pay_icon.svg",
];

export default function Footer() {
  return (
    <section className="relative mt-28">
      <NewsLetterForm />
      <footer
        className="h-full bg-[#F0F0F0] grid grid-flow-row content-center pt-34 pb-12 gap-4 px-4
                        sm:pt-32 sm:pb-12 lg:px-12 md:grid-cols-5 md:px-6 md:justify-items-end"
      >
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-3xl font-[1000]">SHOP.CO</h3>
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        {footerLinks.map((link, index) => {
          return (
            <div key={index}>
              <FooterLinks {...link} index={index} />
            </div>
          );
        })}
        <div
          className="col-span-2 mt-5 flex flex-col gap-5 items-center w-full justify-center border-t-1 pt-4 border-gray-300
                        md:col-span-5 md:flex-row md:justify-between"
        >
          <p className="font-light">
            Shop.co &copy; 2000-2025, All Rights Reserved
          </p>
          <div className="flex gap-4">
            {footerPayments.map((payment, index) => {
              return (
                <FooterPaymentMethods paymentSrc={payment} index={index} />
              );
            })}
          </div>
        </div>
      </footer>
    </section>
  );
}

function NewsLetterForm() {
  return (
    <div
      className="bg-black p-4 text-white flex flex-col gap-3 justify-center rounded-2xl mx-4 absolute right-0 left-0 -translate-y-1/2 
                      sm:flex-row sm:justify-between sm:items-center sm:p-10 md:mx-12"
    >
      <h1 className="text-3xl font-extrabold md:max-w-[50%] md:text-4xl lg:text-5xl">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <form action="" method="post" className="md:w-1/3 w-full">
        <div className="relative">
          <Mail className="text-gray-500 absolute left-4 top-3" />
          <Input
            inputType="email"
            inputPlaceholder="Enter your email address"
            inputStyle="text-black bg-white rounded-full px-12 py-3 text-nowrap w-full mb-3 placeholder:text-gray-500 focus:outline-none"
          />
        </div>
        <SubmitButton
          buttonText="Subscribe to Newsletter"
          buttonStyle="bg-white text-black rounded-full p-2 py-3 text-nowrap w-full"
        />
      </form>
    </div>
  );
}

function FooterLinks({
  category,
  link1,
  link2,
  link3,
  link4,
  index,
}: footerLinksProps) {
  return (
    <ul key={index} className="font-light flex flex-col gap-3 text-nowrap">
      <h4 key={index} className="font-medium">
        {category}
      </h4>
      <li key={index}>
        <Link to={"/"}>{link1}</Link>
      </li>
      <li key={index}>
        <Link to={"/"}>{link2}</Link>
      </li>
      <li key={index}>
        <Link to={"/"}>{link3}</Link>
      </li>
      <li key={index}>
        <Link to={"/"}>{link4}</Link>
      </li>
    </ul>
  );
}

function FooterPaymentMethods({
  paymentSrc,
  index,
}: FooterPaymentMethodsProps) {
  return (
    <img
      key={index}
      src={paymentSrc}
      className="w-12 h-10 px-1 bg-white rounded "
    />
  );
}
