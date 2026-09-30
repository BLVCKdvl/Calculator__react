import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";

function AuthForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const testLogin = "admin";
  const testPassword = "1234";

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === testLogin && password === testPassword) {
      setError("");

      login(username);
      navigate("/profile");
    } else {
      setError("Неверный логин (admin) или пароль (1234)");
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl">
      <h2 className="text-2xl font-bold text-center text-teal-400 mb-6">
        Войти в профиль
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
            placeholder="enter username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white"
            placeholder="enter password"
          />
        </div>

        {error && <p className="text-sm text-rose-500 font-medium">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-teal-600 hover:bg-teal-500 transition font-medium rounded-lg text-white mt-2"
        >
          Log in
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
