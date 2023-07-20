import React from "react";
import Register from "./components/Regsiter";
import { ThemeContext } from "./components/ThemeComponent";

function App() {
  const [textColor, setTextColor] = React.useState('light');
  const [bgColor, setBgColor] = React.useState('dark');
  return (
    <ThemeContext.Provider value={{ textColor, setTextColor, bgColor, setBgColor }}>
      <Register />
    </ThemeContext.Provider>
  )
}
export default App;