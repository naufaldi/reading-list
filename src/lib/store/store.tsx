// store.ts
import create from 'zustand';

// Define the shape of your state
interface UserState {
  userData: Record<string, any>; // Use a more specific type if you know the shape of your userData
}

// Define the actions your store will support
interface UserActions {
  setUserData: (data: Record<string, any>) => void; // Adjust the type as needed
}

// Combine state and actions into a single type for the store
type UserStore = UserState & UserActions;

// Create the store
const useStore = create<UserStore>((set) => ({
  // Initial state
  userData: {},

  // Action to update userData
  setUserData: (data) => set({ userData: data }),
}));

export default useStore;
