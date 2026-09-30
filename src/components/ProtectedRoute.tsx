import AuthForm from "./AuthForm/AuthForm";
import { useAuth } from "../context/AuthContext";

export function ProtectedRoute({ children }: { children: any }) {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex items-center justify-center w-full min-h-[50vh] p-4">
        <AuthForm />
      </div>
    );
  }

  return children;
}
