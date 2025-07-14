import React, { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const savedUser = localStorage.getItem('noteNestUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);


  const login = async (email, password) => {
    setIsLoading(true);

    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const storedUsers = JSON.parse(localStorage.getItem('noteNestUsers') || '[]');
    const matchedUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (matchedUser) {
      const userData = {
        id: matchedUser.id,
        name: matchedUser.name,
        email: matchedUser.email,
      };
      setUser(userData);
      localStorage.setItem('noteNestUser', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }

    setIsLoading(false);
    return false;
  };


  const signup = async (name, email, password) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const storedUsers = JSON.parse(localStorage.getItem('noteNestUsers') || '[]');
    const existingUser = storedUsers.find((u) => u.email === email);

    if (existingUser) {
      setIsLoading(false);
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
    };

    storedUsers.push(newUser);
    localStorage.setItem('noteNestUsers', JSON.stringify(storedUsers));

    const userData = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
    };

    setUser(userData);
    localStorage.setItem('noteNestUser', JSON.stringify(userData));
    setIsLoading(false);
    return true;
  };

  // Logout 
  const logout = () => {
    setUser(null);
    localStorage.removeItem('noteNestUser');
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
