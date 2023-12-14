import React, { createContext, useContext, useState } from 'react';

export const AnimeContext = createContext();

export const useAnime = () => useContext(AnimeContext);

export const AnimeProvider = ({ children }) => {
    const [anime, setAnime] = useState(() => {
        const savedAnime  = localStorage.getItem('anime');
        return savedAnime ? JSON.parse(savedAnime) : null;
      });

  return (
    <AnimeContext.Provider value={{ anime, setAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};