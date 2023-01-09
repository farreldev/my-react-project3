import { Link } from "react-router-dom";
import DisplayTheme from "./DisplayTheme";

function Header() {

  return (
    <header className="border-b p-4 mb-5 flex justify-between items-center">
      <nav className="space-x-7 dark:text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <DisplayTheme />
    </header>
  );
}

export default Header;
