export interface PizzaItem {
  name: string;
  image: string;
  price: number;
  description: string;
  overlay: { label: string; color: string } | null;
  tag: string | null;
}

export const pizzaMenu: PizzaItem[] = [
  {
    name: "Spring Fling Pizza",
    image: "../menu-pizza-01.jpg",
    price: 10.0,
    description: "A fresh medley of seasonal spring vegetables.",
    overlay: { label: "NEW", color: "green" },
    tag: "MUST TRY"
  },
  {
    name: "Korma Special Pizza",
    image: "../menu-pizza-02.jpg",
    price: 12.0,
    description: "A spicy fusion of Indian korma flavors on pizza.",
    overlay: null,
    tag: null
  },
  {
    name: "Farm Villa Pizza",
    image: "../menu-pizza-03.jpg",
    price: 18.0,
    description: "Classic farm-fresh veggies layered with cheese.",
    overlay: null,
    tag: null
  },
  {
    name: "Hot Passion Pizza",
    image: "../menu-pizza-04.jpg",
    price: 16.0,
    description: "Fiery toppings that ignite your taste buds.",
    overlay: { label: "HOT", color: "red" },
    tag: "CHEF LOVE"
  },
  {
    name: "Paneer Tikka Pizza",
    image: "../menu-pizza-05.jpg",
    price: 20.0,
    description: "Traditional paneer tikka with a cheesy twist.",
    overlay: { label: "HOT", color: "red" },
    tag: null
  },
  {
    name: "Mexican Combo Pizza",
    image: "../menu-pizza-06.jpg",
    price: 20.0,
    description: "Spicy beans and corn with a Mexican flair.",
    overlay: null,
    tag: null
  }
];