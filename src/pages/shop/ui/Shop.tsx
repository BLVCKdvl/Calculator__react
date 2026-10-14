import { useAuth } from "../../../context/AuthContext";
import {
  stationeryProducts,
  weaponProducts,
  type Product,
} from "../../../data/ShopProducts";

function Shop() {
  const { user } = useAuth();
  const currentProducts: Product[] = user ? weaponProducts : stationeryProducts;
  const shopTitle = user ? "Secret weapon shop" : "Welcome to Shop!";
  const shopSubtitle = user
    ? `Welcome, agent ${user}.`
    : "The best notebooks and erasers for your productivity";

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 text-white animate-fadeIn">
      <div className="text-center mb-12">
        <h1
          className={`text-4xl font-extrabold mb-4 tracking-tight transition-colors duration-300 ${user ? "text-rose-500" : "text-amber-400"}`}
        >
          {shopTitle}
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto">{shopSubtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className={`p-6 rounded-2xl border transition duration-300 flex flex-col justify-between shadow-lg bg-slate-800/40 backdrop-blur-sm
              ${
                user
                  ? "border-rose-900/50 hover:border-rose-500 sdadow-rose-950/10"
                  : "border-slate-700 hover:border-amber-400 shadow-black/20"
              }
            `}
          >
            <div>
              <div className="text-6xl text-center my-4 select-none drop-shadow-md">
                {product.image}
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-slate-400 line-clamp-3 mb-4">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4 border-t border-slate-700/50 pt-4">
              <span
                className={`text-xl font-mono font-bold ${user ? "text-rose-400" : "text-amber-400"}`}
              >
                {product.price}
              </span>
              <button
                onClick={() => alert(`${product.name} added to shop cart`)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition active:scale-95 text-slate-900
                  ${
                    user
                      ? "bg-rose-500 hover:bg-rose-400"
                      : "bg-amber-400 hover:bg-amber-300"
                  }`}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
