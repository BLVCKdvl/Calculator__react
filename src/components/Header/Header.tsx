import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-slate-700">
      <div className="w-4/5 mx-auto py-2 px-6">
        <NavLink to="/">
          <h1 className="text-2xl text-slate-100 font-light">Calculator</h1>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
