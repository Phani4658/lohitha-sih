import CartItem from "@/components/shared/CartItem";
import { Button } from "@/components/ui/button";
import React from "react";

const cartItems = [
  {
    id: 1,
    title: "Carrot",
    image:
      "https://plus.unsplash.com/premium_photo-1663926032098-62d3593c3200?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
    quantity: 2,
  },
  {
    id: 1,
    title: "Carrot",
    image:
      "https://plus.unsplash.com/premium_photo-1663926032098-62d3593c3200?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 50,
    quantity: 2,
  },
];

function Cart() {
  return (
    <div className="px-4 py-10 flex flex-col min-h-[90vh]">
      <h1 className="text-center font-bold text-2xl">Your Cart</h1>
      <ul className="flex flex-col gap-4 flex-1">
      {cartItems.map((item) => (
        <CartItem itemDetails={item} key={item.id} />
      ))}
      </ul>
      <Button className="mt-auto w-full" variant="secondary">Checkout</Button>
    </div>
  );
}

export default Cart;
