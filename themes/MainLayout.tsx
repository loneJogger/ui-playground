import { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import useDarkMode from "@fisch0920/use-dark-mode";

import ToggleContext from "../themes/ToggleContext";
import SideNav from "../components/SideNav";
import useWindowResize from "../hooks/useWindowResize";
import { darkTheme, lightTheme } from "../themes/themes";

interface Props {
  children: any;
}

const MainLayout = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);
  const darkMode = useDarkMode(false);
  const size = useWindowResize();
  const currentTheme = darkMode.value ? darkTheme : lightTheme;

  const navLinks = [
    { url: "/", text: "Home" },
    { url: "#", text: "link 2" },
    { url: "#", text: "link 3" },
    { url: "#", text: "link 4" },
  ];

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
            <SideNav links={navLinks} page_height={size.height} />
            {props.children}
          </ToggleContext.Provider>
        )}
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
