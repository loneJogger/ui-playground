import { useState, useEffect } from "react";

const useWindowResize = () => {
  interface WindowSize {
    width: number;
    height: number;
  }

  const [size, setSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

export default useWindowResize;
