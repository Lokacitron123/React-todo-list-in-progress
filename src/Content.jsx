import ItemList from "./ItemList";

// Prop drilling by deconstructing incoming props date from App.jsx
const Content = ({ items, handleCheck, handleDelete }) => {
  // The error handling goes like this
  // (1) Check if items is true (not null or undefined)
  // (2) Checks if items.length exists
  // If both are true, it'll render the ItemList, otherwire the p tag will render saying your list is empty
  return (
    <main>
      {items && items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
