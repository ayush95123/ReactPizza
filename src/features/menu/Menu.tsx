import React from "react";
import { getMenu } from "../../services/apiRestaurant";
import { useLoaderData, type LoaderFunction } from "react-router-dom";
import MenuItem from "./MenuItem";
import type Pizza from "../../types/Pizza";

function Menu() {
  const menu: Pizza[] = useLoaderData();
  console.log(menu);
  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

export const loader: LoaderFunction = async () => {
  const menu = await getMenu();
  return menu;
};

export default Menu;