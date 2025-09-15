import Banner from "@/components/Sections/Banner";
import LatestProperties from "@/components/Sections/LatestProperties/LatestProperties";
import NeighborhoodsSection from "@/components/Sections/NeighborhoodsSection/NeighborhoodsSection";
import NewsletterSection from "@/components/Sections/NewsletterSection/NewsletterSection";
import PartnersSection from "@/components/Sections/PrtenersSection/PartnersSection";
import HeaderSection from "@/components/Sections/PrtenersSection/PartnersSection";
import TestimonialsSection from "@/components/Sections/TestimonialsSection/TestimonialsSection";
import Image from "next/image";

export const metadata = {
  title: "Home | EasyHouse",
  description: "Welcome to EasyHouse"
};


export default function Home() {
  return (
    <div className="">
      
      <Banner/>
      <LatestProperties/>
      <NeighborhoodsSection/>
      <TestimonialsSection/>
      <NewsletterSection/>
      <PartnersSection/>
      
    </div>
  );
}
