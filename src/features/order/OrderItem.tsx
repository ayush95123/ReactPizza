import { formatCurrency } from "../../utils/helpers";
import React from "react";

interface itemType {
  quantity: number;
  name: string;
  totalPrice: number;
}
interface OrderItemProps {
  item: itemType;
  isLoadingIngredients: boolean;
  ingredients: any;
}
function OrderItem({
  item,
  isLoadingIngredients,
  ingredients,
}: OrderItemProps) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div>
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
