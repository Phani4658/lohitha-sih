import React from 'react'
import { Card } from '../ui/card'

type Props = {
    itemDetails: {
        id: number,
        title: string,
        image: string,
        price: number,
        quantity: number
    }
}


export default function CartItem({itemDetails}: Props) {
  return (
    <Card className='p-3 h-fit'>
        <img src={itemDetails.image} alt={itemDetails.title} className="w-full h-[150px] object-cover rounded-lg" />
        <div className="p-4">
          <h3 className="text-black font-bold text-base">{itemDetails.title}</h3>
          <p className="text-gray-400">Price: Rs. {itemDetails.price}</p>
          <p className="text-gray-400">Quantity: {itemDetails.quantity}</p>
        </div>
    </Card>
  )
}
