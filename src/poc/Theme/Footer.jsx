import React from "react";

function Footer() {
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
        <p>SiteMap</p>
        <p>Hiring</p>
        <p>All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
