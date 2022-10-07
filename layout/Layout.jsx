import React from "react";

const Layout = ({ children }) => {
  return (
    <section className={`container-fluid`}>
      <main>{children}</main>
    </section>
  );
};

export default Layout;
