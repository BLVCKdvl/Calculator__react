import { NavLink } from "react-router";
import { useAuth } from "../../context/AuthContext";

function Header() {
  const { user } = useAuth();

  return (
    <header className="bg-slate-700">
      <div className="w-4/5 mx-auto py-2 px-6 flex items-center justify-between">
        <NavLink to="/">
          <h1 className="text-2xl text-slate-100 font-light">
            Multi Calculator
          </h1>
        </NavLink>
        <ul className="flex flex-row gap-6">
          <li>
            <NavLink
              to="/counter"
              className="text-xl text-slate-100 font-light"
            >
              Counter
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className="text-xl text-slate-100 font-light"
            >
              Calculator
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className="text-xl text-slate-100 font-light">
              Shop
            </NavLink>
          </li>
        </ul>
        <div className="border p-2 rounded-xl border-teal-400 bg-slate-800 text-teal-400 shadow-inner">
          <NavLink to="/profile" className="text-xl font-light">
            {user ? user : "Log in"}
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
