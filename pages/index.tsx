import type { NextPage } from "next";
import Head from "next/head";
import styled from "@emotion/styled";

import useWindowResize from "../hooks/useWindowResize";

const Home: NextPage = () => {
  const size = useWindowResize();

  const Border = styled.div`
    padding: 64px;
    margin: 64px;
    z-index: 2;
    position: absolute;
    top: 0;
    border: 1px solid #121200;
    width: ${size.width - 128}px;
    height: ${size.height - 128}px;
  `;

  return (
    <div>
      <Head>
        <title>UI Playground</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Border>
        <div></div>
      </Border>
    </div>
  );
};

export default Home;
