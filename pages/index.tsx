import { useState, useEffect } from "react";
import type { NextPage } from "next";
import styled from "@emotion/styled";

import useWindowResize from "../hooks/useWindowResize";
import ThemeChanger from "../components/ThemeChanger";

const Home: NextPage = (props) => {
  const size = useWindowResize();

  const Body = styled.div`
    color: ${(props: any) => props.theme.color.text};
    background: ${(props: any) => props.theme.color.background};
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
    border-color: ${(props: any) => props.theme.color.text};
    width: ${size.width - 128}px;
    height: ${size.height - 128}px;
  `;

  return (
    <div>
      <Body>
        <ThemeChanger />
        <Border>
          <div>Hello Hello</div>
        </Border>
      </Body>
    </div>
  );
};

export default Home;
