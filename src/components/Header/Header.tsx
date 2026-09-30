import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-slate-700">
      <div className="w-4/5 mx-auto py-2 px-6 flex items-center gap-20">
        <NavLink to="/">
          <h1 className="text-2xl text-slate-100 font-light">Calculator</h1>
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/counter"
              className="text-xl text-slate-100 font-light"
            >
              Counter
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
