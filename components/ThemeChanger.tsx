import { useContext } from "react";

import ToggleContext from "../themes/ToggleContext";

const ThemeChanger = (props: any) => {
  const { isDarkTheme, toggleTheme }: any = useContext(ToggleContext);

  return (
    <div>
      <div className="theme-icon" onClick={toggleTheme}>
        {isDarkTheme ? "[ Dark ]" : "[ Light ]"}
      </div>
    </div>
  );
};

export default ThemeChanger;
