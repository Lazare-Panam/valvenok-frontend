import { useMutation } from "@tanstack/react-query";
import { registerUser, RegisterRequestDto } from "../../../api/authApi";
import { useNotificationStore } from "@/src/store/useNotificationStore";
import { useRouter } from "next/navigation";

export const useRegister = () => {
  const showNotification = useNotificationStore(
    (state) => state.showNotification,
  );
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterRequestDto) => registerUser(data),
    onSuccess: () => {
      showNotification({
        message: "Account created successfully!",
        severity: "success",
      });
      router.push("/login");
    },
    onError: (error: any) => {
      const errorMessage =
        error.response?.data?.message ||
        "Registration failed. Please try again.";
      showNotification({
        message: errorMessage,
        severity: "error",
      });
    },
  });
};
