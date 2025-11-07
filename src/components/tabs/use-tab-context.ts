import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

// This is a hack. It can't support multiple tab controls.

interface TabState{
  readonly activeTabID?: string;
}

export const tabState = atom<TabState>({ activeTabID: '1' });

export interface TabContext {
  activeTabID?: string;
  setActiveTabID: (id: string) => void;
}

export const useTabContext = (): TabContext => {
  const { activeTabID } = useStore(tabState);

  return {
    activeTabID,
    setActiveTabID: (id: string) => {
      tabState.set({ activeTabID: id });
    },
  };
};
