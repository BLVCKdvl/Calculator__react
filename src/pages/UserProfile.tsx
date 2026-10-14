import { useAuth } from "../context/AuthContext";

function UserProfile() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="w-full max-w-md p-8 bg-slate-800 border boredr-slate-700 rounded-2xl shadow-xl text-center">
      <div className="w-20 h-20 bg-teal-500 text-slate-900 text-3xl font-bold flex items-center justify-center rounded-full mx-auto mb-4 uppercase">
        {user[0]}
      </div>

      <h2 className="text-2xl font-bold text-white mb-2">Welcome, {user}!</h2>
      <p className="text-sm text-slate-400 mb-6">
        Successfully authorized in system
      </p>

      <button
        onClick={logout}
        className="w-full py-2 bg-slate-700 hover:bg-slate-600 transition font-medium rounded-lg active:scale-95 text-white"
      >
        Log out
      </button>
    </div>
  );
}

export default UserProfile;
