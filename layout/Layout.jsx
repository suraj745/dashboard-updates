import React from "react";

const Layout = ({ children }) => {
  return (
    <section>
      <nav></nav>
      <main>{children}</main>
      <footer></footer>
    </section>
  );
};

export default Layout;
