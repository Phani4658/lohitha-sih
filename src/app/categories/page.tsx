import React from "react";
import { FaSearch } from "react-icons/fa";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import HomeCard from "@/components/shared/HomeCard";

const categories = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Vegetables",
    value: "vegetables",
  },
  {
    label: "Fruits",
    value: "fruits",
  },
  {
    label: "Dairy",
    value: "dairy",
  },
  {
    label: "Poultry",
    value: "poultry",
  },
];

const categoryCards = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1663926032098-62d3593c3200?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Carrot",
    price: "Rs. 50",
    category: "vegetables",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560807707-8cc77767d783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxhcHBsZXN8fDB8fHx8MTYzNDU4Nzk5MA&ixlib=rb-1.2.1&q=80&w=400",
    title: "Apple",
    price: "Rs. 120",
    category: "fruits",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-129418cb2dfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE0fHxkYWlyeXx8MHx8fHwxNjM0NTg3OTkw&ixlib=rb-1.2.1&q=80&w=400",
    title: "Milk",
    price: "Rs. 60",
    category: "dairy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1550332789-677b8ec7670b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHBvdWx0cnl8fDB8fHx8MTYzNDU4Nzk5MA&ixlib=rb-1.2.1&q=80&w=400",
    title: "Chicken",
    price: "Rs. 300",
    category: "poultry",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxvcmFuZ2V8fDB8fHx8MTYzNDU4Nzk5MA&ixlib=rb-1.2.1&q=80&w=400",
    title: "Orange",
    price: "Rs. 80",
    category: "fruits",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586362099433-b23d1f5aa07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fHBvdWx0cnl8fDB8fHx8MTYzNDU4Nzk5MA&ixlib=rb-1.2.1&q=80&w=400",
    title: "Eggs",
    price: "Rs. 180",
    category: "poultry",
  },
];

export default function Categories() {
  const filterByCategory = (category: string) => {
    if (category === "all") {
      return categoryCards;
    }
    return categoryCards.filter((card) => card.category === category);
  };

  return (
    <div className="px-4 py-10">
      <div className="flex items-center gap-3 mb-5 w-full bg-gray-500 rounded-lg p-1 justify-center">
        <FaSearch className="mx-2" />
        <input
          type="search"
          placeholder="Search for Products"
          className="flex-1 bg-transparent p-1 outline-none"
        />
      </div>
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent border-b-2 border-gray-400 w-full rounded-none pb-0">
          <ScrollArea className="w-[90vw] flex justify-between max-w-md whitespace-nowrap">
            {categories.map((category) => (
              <TabsTrigger
                value={category.value}
                key={category.value}
                className="bg-transparent mx-3 text-white data-[state=active]:font-bold data-[state=active]:border-b data-[state=active]:text-white rounded-none"
              >
                {category.label}
              </TabsTrigger>
            ))}
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.value} value={category.value}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {filterByCategory(category.value).map((card, index) => (
                <HomeCard cardDetails={card} key={card.price} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
