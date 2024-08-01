import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import heroImage from "../../public/heroImage.jpg";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row md:justify-between gap-12 md:h-[75vh] items-center">
      <div className="flex flex-col items-start gap-6 md:gap-12 w-full md:w-1/2 justify-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-tight from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          Revolutionizing Fundraising through Web3 and WalletConnect
        </h1>
        <Button variant="default" className="">
          Connect Wallet
        </Button>
      </div>
      <div className="w-full md:w-2/5">
        <Image
          src={heroImage}
          alt="Image"
          className="rounded-md object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
