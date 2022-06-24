import { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import useDarkMode from "@fisch0920/use-dark-mode";

import ToggleContext from "../themes/ToggleContext";
import { darkTheme, lightTheme } from "../themes/themes";

interface Props {
  children: any;
}

const MainLayout = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);
  const currentTheme = darkMode.value ? darkTheme : lightTheme;
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>UI Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider theme={currentTheme}>
        {isMounted && (
          <ToggleContext.Provider
            value={{
              isDarkTheme: darkMode.value,
              toggleTheme: darkMode.toggle,
            }}
          >
            {props.children}
          </ToggleContext.Provider>
        )}
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
