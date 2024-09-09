import HomeCard from "@/components/shared/HomeCard";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const homeCards = [
  {
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1300&h=1528",
    title: "Broccoli",
    price: "Rs. 50",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDUN5SUsLMUAupeWKUS6iw_q_0fMGv6EPSg&s",
    title: "Cabbage",
    price: "Rs. 50",
  },
  {
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1300&h=1528",
    title: "Broccoli",
    price: "Rs. 50",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDUN5SUsLMUAupeWKUS6iw_q_0fMGv6EPSg&s",
    title: "Cabbage",
    price: "Rs. 50",
  },
  {
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1300&h=1528",
    title: "Broccoli",
    price: "Rs. 50",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDUN5SUsLMUAupeWKUS6iw_q_0fMGv6EPSg&s",
    title: "Cabbage",
    price: "Rs. 50",
  },
  {
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1300&h=1528",
    title: "Broccoli",
    price: "Rs. 50",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyDUN5SUsLMUAupeWKUS6iw_q_0fMGv6EPSg&s",
    title: "Cabbage",
    price: "Rs. 50",
  },
];

export default function Home() {
  return (
    <div className="px-5 py-10">
      <h1 className="text-xl font-bold mb-3">Fresh From the Farm</h1>
      <div className="flex items-center gap-3 w-full bg-gray-500 rounded-lg p-1 justify-center">
        <FaSearch className="mx-2" />
        <input
          type="search"
          placeholder="Search for Products"
          className="flex-1 bg-transparent p-1 outline-none"
        />
      </div>
      <h2 className="text-lg font-bold my-3">Recommended for you</h2>
      <ul className="grid grid-cols-2 gap-3">
        {homeCards.map((card) => (
          <HomeCard cardDetails={card} key={card.price} />
        ))}
      </ul>
    </div>
  );
}
