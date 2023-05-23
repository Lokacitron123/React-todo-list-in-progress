import ItemList from "./ItemList";

// Prop drilling by deconstructing incoming props date from App.jsx
const Content = ({ items, handleCheck, handleDelete }) => {
  // ? :  = turnary conditional operator items.length is being checked and if is a length this return will jump into the UL, but if not it will show a paragraph.
  // the formula goes like this a ? b : c
  // If A is true true => B, if A is false => C
  return (
    <main>
      {items.length ? (
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
