import { logoutUser } from "@/src/api/authApi";
import { useUserStore } from "@/src/store/useUserStore";
import { useRouter } from "next/navigation";
export const useLogout = () => {
  const logoutStore = useUserStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // 1. Tell the backend to clear the cookie
      await logoutUser();
    } catch (error) {
      console.error("Backend logout failed, clearing local state anyway", error);
    } finally {
      // 2. Clear Zustand (user: null, isAuthenticated: false)
      logoutStore();
      // 3. Kick to login
      router.push('/login');
    }
  };

  return handleLogout;
};