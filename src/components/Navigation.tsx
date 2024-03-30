import "./SCSS/Navigation.scss";
//lazy loading
import { Suspense, lazy } from "react";
const DesktopNavLazy = lazy(() => import("./DesktopNav"));
const MobileNavLazy = lazy(() => import("./MobileNav"));

export const MENU_ITEMS = [
  { id: 1, to: "/#start", item: "Start" },
  { id: 2, to: "/#steps", item: "What & Why?" },
  { id: 3, to: "/#about", item: "About us" },
  { id: 4, to: "/#help", item: "Foundations & Organizations" },
  { id: 5, to: "/#contact", item: "Contact" }
];

const Navigation = () => {
  return (
    <div className="navigation-container">
      <DesktopNavLazy />
      <MobileNavLazy />
    </div>
  );
};

export default Navigation;
