import React from "react";

function Header() {
  return (
    <>
      <div>Header</div>
      <Options></Options>
      <Options></Options>
      <Options></Options>
    </>
  );
}

function Options() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <p>About</p>
        <p>Contact us</p>
        <p>Search</p>
      </div>
    </>
  );
}

export default Header;
