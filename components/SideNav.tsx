import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface navProps {
  links: link[];
  page_height: number;
}

interface link {
  url: string;
  text: string;
}

const SideNav = (props: navProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: -140 },
  };

  const WIDTH = "48px";
  const HEIGHT = "48px";

  const Wrapper = styled.div`
    position: absolute;
    left: -10px;
    z-index: 4;
    color: ${(props: any) => props.theme.color.background};
    background: ${(props: any) => props.theme.color.text};
    width: 210px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    li {
      list-style: none;
      padding: 8px;
    }
    svg {
      margin: 0px 0px 0px 42px;
      cursor: pointer;
    }
    path {
      stroke: ${(props: any) => props.theme.color.background};
      stroke-width: 10px;
      fill: ${(props: any) => props.theme.color.text};
    }
  `;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const generateNavs = () => {
    const list = props.links.map((e: link, i: number) => {
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

  return (
    <motion.div
      layout
      initial={false}
      animate={isOpen ? "open" : "closed"}
      transition={{ type: "spring", stiffness: 60 }}
      variants={variants}
    >
      <Wrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: `${props.page_height}px`,
          }}
        >
          <ul>{generateNavs()}</ul>
          <svg
            viewBox="0 0 500 500"
            width={WIDTH}
            height={HEIGHT}
            onClick={toggle}
          >
            <path
              d="M -277.139 -375.822 Q -248.343 -416.46 -220.004 -375.822 L -58.69 -144.497 Q -30.351 -103.859 -87.486 -103.859 L -412.716 -103.859 Q -469.851 -103.859 -441.055 -144.497 Z"
              transform="matrix(0, 1, -1, 0, -0.000549, 499.999451)"
            />
          </svg>
        </div>
      </Wrapper>
    </motion.div>
  );
};

export default SideNav;
