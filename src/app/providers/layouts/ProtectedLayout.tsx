import { Outlet } from "react-router";
import { useAuth } from "@/entities/user";
import { AuthForm } from "@/features/auth-by-login/ui/AuthForm";

export function ProtectedLayout() {
  const { user } = useAuth();

  if (!user)
    return (
      <div className="flex items-center justify-center w-full min-h-[50vh] p-4">
        <AuthForm />
      </div>
    );

  return <Outlet />;
}
