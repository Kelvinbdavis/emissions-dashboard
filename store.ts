import { create } from 'zustand';

interface DrawerState {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

interface AppState {
  drawer: DrawerState;
}

export const useAppStore = create<AppState>(set => ({
  drawer: {
    drawerOpen: false,
    setDrawerOpen: open =>
      set(state => ({
        drawer: { ...state.drawer, drawerOpen: open },
      })),
  },
}));
