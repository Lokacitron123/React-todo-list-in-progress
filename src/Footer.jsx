import React from "react";

export default function Footer({ length }) {
  const today = new Date();
  return (
    <footer>
      <p>
        {length} list {length === 1 ? "item" : "items"}
      </p>
      <p>Copywrite &copy; {today.getFullYear()}</p>
    </footer>
  );
}
