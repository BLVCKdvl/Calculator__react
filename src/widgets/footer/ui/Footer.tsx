import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="bg-zinc-800">
      <div className="w-4/5 mx-auto py-2 px-6">
        <NavLink to="/">
          <h1 className="text-2xl text-slate-100 font-light">
            Multi Calculator
          </h1>
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
