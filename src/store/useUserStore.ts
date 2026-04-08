// store/useUserStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  isStoreReady: boolean;
  // Added the missing function definition to the interface
  setStoreReady: (ready: boolean) => void; 
  setUser: (user: User) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isStoreReady: false,
      // Properly implementing the function
      setStoreReady: (ready) => set({ isStoreReady: ready }),
      setUser: (user) => set({ user, isAuthenticated: true }),
      logout: () => {
        set({ user: null, isAuthenticated: false });
        // Optional: Clear localStorage on logout if you want a hard reset
        localStorage.removeItem('valvenok-user-storage');
      },
    }),
    {
      name: 'valvenok-user-storage',
      storage: createJSONStorage(() => localStorage),
      // This is the "Guard" logic: 
      // It sets isStoreReady to true ONLY after the data is pulled from localStorage
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.setStoreReady(true);
        }
      },
    }
  )
);