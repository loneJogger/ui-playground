import { useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface burgerProps {
  links: link[];
}

interface menuProps {
  links: link[];
  isOpen: boolean;
  toggle(): void;
}

interface link {
  url: string;
  text: string;
}

const Burger = (props: burgerProps) => {
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
      fill: ${(props: any) => props.theme.color.text};
      margin: 8px 12px;
      cursor: pointer;
    }
  `;

  return (
    <Wrapper>
      <svg viewBox="0 0 100 80" width={WIDTH} height={HEIGHT} onClick={toggle}>
        <rect width="100" height="3"></rect>
        <rect y="30" width="100" height="3"></rect>
        <rect y="60" width="100" height="3"></rect>
      </svg>
      <Menu isOpen={isOpen} toggle={toggle} links={props.links} />
    </Wrapper>
  );
};

const Menu = (props: menuProps) => {
  const MenuWrapper = styled.div`
    top: 0;
    z-index: 4;
    color: ${(props: any) => props.theme.color.text};
    background: ${(props: any) => props.theme.color.background};
    width: 300px;
    padding: 8px;
    margin: 8px;
    border: solid 1px ${(props: any) => props.theme.color.text};
    li {
      list-style: none;
      padding: 8px;
    }
    a {
      margin: 8px;
    }
    svg {
      margin: 8px 12px;
      cursor: pointer;
    }
    path {
      stroke: ${(props: any) => props.theme.color.text};
    }
  `;

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 1, x: -300 },
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
      animate={props.isOpen ? "open" : "closed"}
      variants={variants}
      initial={false}
    >
      <MenuWrapper>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <svg
            viewBox="0 0 80 80"
            width="24"
            height="24"
            style={{ margin: "12px", cursor: "pointer" }}
            onClick={props.toggle}
          >
            <path strokeWidth="4" d="M 0,0 L 80,80 M 0,80 L 80,0" />
          </svg>
        </div>
        <div>{generateNavs()}</div>
      </MenuWrapper>
    </motion.div>
  );
};

export default Burger;
