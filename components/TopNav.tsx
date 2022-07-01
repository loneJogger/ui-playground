import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import Burger from "./Burger";

const TopNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const Bar = styled.div`
    position: absolute;
    top: 0;
    z-index: 4;
    display: flex;
    margin: 16px;
    li {
      list-style: none;
    }
    a {
      margin: 8px;
    }
  `;

  const generateNavs = () => {
    const list = props.links.map((e, i, links) => {
      if (i + 1 === links.length) {
        return (
          <li key={i}>
            <Link href={e.url}>
              <a>{e.text}</a>
            </Link>
          </li>
        );
      } else {
        return (
          <li key={i}>
            <Link href={e.url}>
              <a>{e.text}</a>
            </Link>
            {"|"}
          </li>
        );
      }
    });
    return list;
  };

  return props.page_width < 1000 ? <Burger /> : <Bar>{generateNavs()}</Bar>;
};

export default TopNav;
