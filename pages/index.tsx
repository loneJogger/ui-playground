import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import ThemeChanger from "../components/ThemeChanger";
import useWindowResize from "../hooks/useWindowResize";
import TopNav from "../components/TopNav";

const Home: NextPage = (props) => {
  const size = useWindowResize();

  const Body = styled.div`
    color: ${(props) => props.theme.color.text};
    background: ${(props) => props.theme.color.background};
    width: ${size.width}px;
    height: ${size.height}px;
  `;

  const Border = styled.div`
    padding: 64px;
    margin: 64px;
    z-index: 2;
    position: absolute;
    top: 0;
    border: 1px solid;
    border-color: ${(props) => props.theme.color.text};
    width: ${size.width - 128}px;
    height: ${size.height - 128}px;
  `;

  const navLinks = [
    { url: "/", text: "Home" },
    { url: "#", text: "link 2" },
    { url: "#", text: "link 3" },
    { url: "#", text: "link 4" },
  ];

  return (
    <div>
      <Body>
        <ThemeChanger />
        <TopNav links={navLinks} page_width={size.width} />
        <Border>
          <div>Hello Hello</div>
        </Border>
      </Body>
    </div>
  );
};

export default Home;
