import React from "react";
import Header from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentUrl = window.location.pathname;

  return (
    <div className="container">
      <Header pageUrl={currentUrl} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
