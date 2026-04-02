import { create } from "zustand"

interface NotificationParams {
  message: string
  severity: "success" | "error" | "info" | "warning"
  partNumber?: string
}

interface NotificationStore extends NotificationParams {
  open: boolean
  showNotification: (params: NotificationParams) => void
  hideNotification: () => void
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  open: false,
  message: "",
  severity: "success",
  partNumber: "",
  showNotification: (params) => set({ ...params, open: true }),
  hideNotification: () => set({ open: false }),
}))