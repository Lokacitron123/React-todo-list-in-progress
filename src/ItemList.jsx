import React from "react";
import LineItem from "./LineItem";

// every new item created from the .map function needs a key value. We can set it to key={item.id} because the id is unique to each item
const ItemList = ({ items, handleCheck, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
