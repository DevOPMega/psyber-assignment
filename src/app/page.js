import IntroductionCard from "@/components/card/IntroCard";
import Carousel from "@/components/carousel/Carousel";
import Service from "@/components/Service";
import React from "react";
import Image from "next/image";
import Contact from "@/components/Contact";

const HomePage = () => {
  return (
    <div className="py-3 bg-bg-4">
      <Carousel />
      <div className="grid grid-cols-1 gap-8 mt-4 px-6 pt-6 pb-12  bg-bg-1 border-t-8 border-bg-2 md:px-12 lg:grid-cols-2">
        <IntroductionCard
          title="Our Story"
          description="Alpha Financial Solutions provides bespoke mortgage and finance services. We believe that financial freedom is not just a goal but a journey, and we are here to guide you every step of the way."
        />
        <IntroductionCard
          title="Our Mission"
          description="At Alpha Financial Solutions, our mission is to empower individuals and businesses to achieve their financial aspirations through tailored solutions, expert advice, and exceptional service. We strive to build lasting relationships based on trust, integrity, and mutual success."
        />
      </div>
      <div className="px-6 py-20 md:px-12">
        <Service />
      </div>
      <div className="px-6 pt-0 pb-12 md:px-12">
        <div className="my-8 text-center">
          <span style={{fontSize: "48px"}} className="material-symbols-outlined">volunteer_activism</span>
        </div>
        <h2 className="text-3xl text-heading font-bold text-center">
          Meet Our Founder
        </h2>
        <Image 
          src="/Pawan panjabi.jpg"
          width={360}
          height={420}
          className="my-6 m-auto"
          alt="Founder image"
        />
      </div>
      <div className="px-6 py-20 md:px-12">
        <Contact />
      </div>
    </div>
  );
};

export default HomePage;
