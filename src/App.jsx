import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  // states
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist"))
  );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  // functions below

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  };

  // Add Item
  // the initial ? after items checks if it is defined and not null
  // If items is not null it'll check if items.length is true (greater than 0)
  // If it is greater than 0 it accesses the id property of the last item in the items array and icrements it by 1 to generate a new id.
  // If If items is null or items.length is false, it will assign 1 to the id for the new item instead

  // const listItem creates a new array from the the spread operator
  // (items ?? []) is used to provide an emptry array as a fallback value incase items is null or undefined
  // myNewItem is an object added to the end of the listItems array
  // the ?? operator works like this
  // const result = a ?? b;
  // If a is not null or undefined, the result will be the value of a.
  // If a is null or undefined the result will be the value of b

  // The reason for the ?? is to check if a value is initially null or undefined. Even it is null an array can be created or what ever code you want to run after ??

  const addItem = (item) => {
    const id = items?.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...(items ?? []), myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    // 1. We use map which creates a new array
    // 2. We refer to each item in the items array.
    // 3. We check if the id is equal to the item.id that is passed in with the handle event
    // 4. if the items are equal we return a new item {...item} which will flip to its opposite with the 2nd param in the object {...item, checked: !item.// checked}
    // 6. If not, we return the existing item

    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    // we use setItems to set a new state
    setAndSaveItems(listItems);
    // Saving setItem to localstorage
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    // resets newItem with setNewItem after submission by setting it to an emptry string again
    setNewItem("");
  };

  // length checker
  const itemCount = items ? items.length : 0;

  return (
    <div className="App">
      <Header title={"Grocery List"} />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLocaleLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={itemCount} />
    </div>
  );
}

export default App;
