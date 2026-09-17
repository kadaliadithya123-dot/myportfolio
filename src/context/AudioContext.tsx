import React, { createContext, useContext, useState, useEffect } from 'react';
import { sound } from '../utils/sound';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playHover: () => void;
  playClick: () => void;
  playSuccess: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isMuted: true,
  toggleMute: () => {},
  playHover: () => {},
  playClick: () => {},
  playSuccess: () => {},
});

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    setIsMuted(sound.getMuted());
  }, []);

  const toggleMute = () => {
    const newState = sound.toggleMute();
    setIsMuted(newState);
  };

  const playHover = () => {
    sound.playHover();
  };

  const playClick = () => {
    sound.playClick();
  };

  const playSuccess = () => {
    sound.playSuccess();
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playHover, playClick, playSuccess }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => useContext(AudioContext);
