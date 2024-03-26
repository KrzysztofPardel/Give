import "./SCSS/Navigation.scss";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

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
      <DesktopNav />
      {/* <MobileNav /> */}
    </div>
  );
};

export default Navigation;
