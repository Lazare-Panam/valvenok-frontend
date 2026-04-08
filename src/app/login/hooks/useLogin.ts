// hooks/useAuth.ts
import { useMutation } from '@tanstack/react-query';
import { loginUser, LoginRequestDto } from '@/src/api/authApi';
import { useUserStore } from '@/src/store/useUserStore';
import { useNotificationStore } from '@/src/store/useNotificationStore';
import { useRouter } from 'next/navigation';

export const useLogin = () => {
  const setUser = useUserStore((state) => state.setUser);
  const showNotification = useNotificationStore((state) => state.showNotification);
  const router = useRouter();

  return useMutation({
    mutationFn: (credentials: LoginRequestDto) => loginUser(credentials),
    onSuccess: (userData) => {
      // Update global user state
      setUser(userData);
      
      showNotification({
        message: `Welcome back, ${userData.firstName}!`,
        severity: 'success',
      });

      // Redirect to dashboard or home
      router.push('/account');
    },
    onError: (error: any) => {
      // Handle backend error messages (e.g., "Invalid email" or "Incorrect password")
      const message = error.response?.data?.message || "Login failed. Please try again.";
      
      showNotification({
        message: message,
        severity: 'error',
      });
    },
  });
};