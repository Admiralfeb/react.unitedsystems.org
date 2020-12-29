import { useLocalStorage, writeStorage } from '@rehooks/local-storage';
import { IMassacreContext } from 'models/massacreContext';
import { IMassacreTrack } from 'models/massacreTrack';
import { createContext, ReactNode, useEffect, useState } from 'react';

export const MassacreContext = createContext<IMassacreContext | null>(null);

export const MassacreContextProvider = (props: { children: ReactNode }) => {
  const [store] = useLocalStorage<IMassacreTrack[] | null>(
    'massacreTrackerStore',
    null
  );

  const [trackers, setTrackers] = useState<IMassacreTrack[]>(() => {
    if (store && Array.isArray(store) && store.length > 0) {
      const trackers: IMassacreTrack[] = store;
      return trackers;
    } else {
      return [];
    }
  });

  const [selectedTab, setSelectedTab] = useState<string>(() => {
    if (trackers && trackers.length > 0) {
      const selectedTrack = trackers.find((x) => x.current === true);
      if (selectedTrack) {
        return selectedTrack.hazRezSystem;
      } else {
        return '+';
      }
    } else {
      return '+';
    }
  });

  useEffect(() => {
    writeStorage('massacreTrackerStore', trackers);
  }, [trackers]);

  const addTracker = (newTracker: IMassacreTrack) => {
    setTrackers((prevTrackers) => {
      if (prevTrackers) {
        return [...prevTrackers, newTracker];
      } else {
        return [newTracker];
      }
    });
  };

  const updateTracker = (index: number, newTracker: IMassacreTrack) => {
    setTrackers((prevTrackers) => {
      if (prevTrackers) {
        prevTrackers[index] = newTracker;
        return prevTrackers;
      } else {
        return [newTracker];
      }
    });
  };

  const deleteTracker = (index: number) => {
    setTrackers((prevTrackers) => {
      if (prevTrackers) {
        return [
          ...prevTrackers.slice(0, index),
          ...prevTrackers.slice(index + 1),
        ];
      }
      return [];
    });
  };

  const wrapper: IMassacreContext = {
    trackers,
    addTracker,
    updateTracker,
    deleteTracker,
    selectedTab,
    setSelectedTab,
  };

  return (
    <MassacreContext.Provider value={wrapper}>
      {props.children}
    </MassacreContext.Provider>
  );
};
