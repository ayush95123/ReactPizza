import { type JSX } from "react";
import {
  Form,
  redirect,
  useActionData,
  useNavigation,
  type ActionFunction,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import type CartItem from "../../types/CartItem";

interface NewOrder {
  address: string;
  phone: string;
  cart: CartItem;
  customer: string;
  priority: boolean;
}

interface Errors {
  phone?: string;
}

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart: CartItem[] = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder(): JSX.Element {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData() as Errors;

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          {formErrors?.phone && <p>{formErrors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

//Similar to laoder
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (typeof data.cart !== "string") {
    throw new Error("Cart data is not a string");
  }

  //TODO::Infer as type CartItem[]
  const cart = JSON.parse(data.cart);

  const order: NewOrder = {
    customer: data.customer as string,
    phone: data.phone as string,
    address: data.address as string,
    cart,
    priority: data.priority === "on",
  };

  const errors: Errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Phone number is not valid";
  }
  if (Object.keys(errors).length > 0) {
    return errors;
  }

  //If no errors create new order and redirect
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
};

export default CreateOrder;
