import { useAuth } from "../../context/AuthContext";

function Shop() {
  const { user } = useAuth();

  return (
    <section className="w-4/5 px-6 mx-auto">
      <div className="flex justify-center py-10">
        <h2 className="text-teal-400 text-4xl font-light">
          {user ? "Welcome to Gun Shop! c:" : "Welcome to Shop!"}
        </h2>
      </div>
    </section>
  );
}

export default Shop;
