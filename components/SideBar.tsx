import { useState } from "react";
import styled from "@emotion/styled";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlert, setIsAlert] = useState(false);

  const Bar = styled.div`
    position: absolute;
    top: 0;
    z-index: 4;
  `;

  return <Bar></Bar>;
};

export default SideBar;
