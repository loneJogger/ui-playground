import { useState } from "react";
import Link from "next/link";

import styled from "@emotion/styled";

const Burger = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const WIDTH = "48px";
  const HEIGHT = "48px";

  const Wrapper = styled.div`
    position: absolute;
    top: 0;
    z-index: 4;
    svg {
      fill: ${(props) => props.theme.color.text};
      margin: 8px 12px;
      cursor: pointer;
    }
  `;

  const MenuWrapper = styled.div`
    color: ${(props) => props.theme.color.text};
    background: ${(props) => props.theme.color.background};
    width: 300px;
    padding: 8px;
  `;

  return (
    <Wrapper>
      <svg viewBox="0 0 100 80" width={WIDTH} height={HEIGHT}>
        <rect width="100" height="3"></rect>
        <rect y="30" width="100" height="3"></rect>
        <rect y="60" width="100" height="3"></rect>
      </svg>
    </Wrapper>
  );
};

const Menu = (props) => {
  const generateNavs = () => {
    const list = props.links.map((e, i) => {
      return (
        <li key={i}>
          <Link href={e.url}>
            <a>{e.text}</a>
          </Link>
        </li>
      );
    });
    return list;
  };
};

export default Burger;
