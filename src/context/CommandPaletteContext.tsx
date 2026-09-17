import React, { createContext, useContext, useState, useEffect } from 'react';

interface CommandPaletteContextType {
  isOpen: boolean;
  openPalette: () => void;
  closePalette: () => void;
  togglePalette: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextType>({
  isOpen: false,
  openPalette: () => {},
  closePalette: () => {},
  togglePalette: () => {},
});

export const CommandPaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPalette = () => setIsOpen(true);
  const closePalette = () => setIsOpen(false);
  const togglePalette = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        togglePalette();
      }
      // Escape closes
      if (e.key === 'Escape' && isOpen) {
        closePalette();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <CommandPaletteContext.Provider value={{ isOpen, openPalette, closePalette, togglePalette }}>
      {children}
    </CommandPaletteContext.Provider>
  );
};

export const useCommandPalette = () => useContext(CommandPaletteContext);
