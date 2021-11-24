import React, { useState, useEffect } from "react";
import MyContext from ".";

const MyContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const rootElement = document.documentElement;

  const changeThemeTo = (turnedTheme) => {
    localStorage.setItem('theme', turnedTheme);
    setTheme(turnedTheme);
  };

  useEffect(() => {
    let localStorageTheme = localStorage.getItem('theme');
    if(localStorageTheme === null) {
      localStorageTheme = localStorage.setItem('theme', 'light');
    }
    setTheme(localStorageTheme);
    rootElement.style = theme === 'dark' ? 'color-scheme:dark' : 'color-scheme:light';
    rootElement.className = theme;
  }, [theme, rootElement])

  const contextValue = {
    theme,
    changeThemeTo,
  };

  return (
    <MyContext.Provider value={ contextValue }>
      { children }
    </MyContext.Provider>
  );
};

export default MyContextProvider;
