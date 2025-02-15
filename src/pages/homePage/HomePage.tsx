import DressCategorySection from "../../components/homePageComponents/dressCategorySection/DressCategorySection";
import ProductSection from "../../components/homePageComponents/productSection/ProductSection";
import ReviewSection from "../../components/homePageComponents/reviewSection/ReviewSection";
import Footer from "../../components/ui/footer/Footer";
import Header from "../../components/ui/header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <ProductSection sectionTitle={"NEW ARRIVALS"} />
      <hr className="border-gray-300 mx-4 my-10 md:my-14 md:mx-12 "/>
      <ProductSection sectionTitle={"TOP SELLING"} />
      <DressCategorySection />
      <ReviewSection />
      <Footer />
    </>
  );
}
