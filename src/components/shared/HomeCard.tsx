import React from "react";
import Image from "next/image";

interface CardDetails {
  image: string;
  title: string;
  price: string;
}
const HomeCard = ({ cardDetails }: { cardDetails: CardDetails }) => {
  return (
    <div className="bg-transparent border-0">
      <div>
        <div className="h-[150px]">
          <Image
            src={cardDetails.image}
            alt={cardDetails.title}
            height={400}
            width={300}
            className="rounded-lg w-full h-full"
          />
        </div>
        <h3 className="text-white font-bold text-base">{cardDetails.title}</h3>
        <p className="text-gray-400">{cardDetails.price}</p>
      </div>
    </div>
  );
};

export default HomeCard;
