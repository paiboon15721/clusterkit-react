import React, { createContext, useContext, useState } from "react";

const themeContext = createContext();
const themes = ["primary", "danger", "warning", "success"];

const Item = ({ text }) => {
  const { theme } = useContext(themeContext);
  return (
    <div className={`alert alert-${themes[theme]}`} role="alert">
      {text}
    </div>
  );
};

const ItemList = () => {
  const items = ["cat", "dog", "pig"];
  return items.map(v => <Item text={v} />);
};

const ThemeApp = () => {
  return (
    <themeContext.Consumer>
      {({ theme, handleChangeTheme }) => (
        <>
          <button
            onClick={handleChangeTheme}
            className={`btn btn-${themes[theme]} mb-3`}
          >
            Change Theme
          </button>
          <ItemList />
        </>
      )}
    </themeContext.Consumer>
  );
};

let i = 0;

const App = () => {
  const [theme, setTheme] = useState(0);

  const handleChangeTheme = () => {
    i += 1;
    if (i === themes.length) {
      i = 0;
    }
    setTheme(i);
  };

  return (
    <themeContext.Provider value={{ theme, handleChangeTheme }}>
      <ThemeApp />
    </themeContext.Provider>
  );
};

export default App;
