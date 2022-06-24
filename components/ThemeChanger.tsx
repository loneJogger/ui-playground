import { useContext } from "react";

import ToggleContext from "../themes/ToggleContext";
import Moon from "./icons/Moon";
import Sun from "./icons/Sun";

const ThemeChanger = (props: any) => {
  const { isDarkTheme, toggleTheme }: any = useContext(ToggleContext);

  return (
    <div>
      <div className="theme-icon" onClick={toggleTheme}>
        {isDarkTheme ? <Moon /> : <Sun />}
      </div>
    </div>
  );
};

export default ThemeChanger;
