import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      _id: 'guest', 
      username: 'GUEST',
      password: 'GUEST', 
      role: 'GUEST',
      // any other default properties for a guest user
    };
  });

  useEffect(() => {
    // Update localStorage when user changes
    if (user && user._id !== 'guest') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};