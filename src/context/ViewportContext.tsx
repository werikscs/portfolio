import React, { createContext, useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export const ViewportContext = createContext<any>({});

export const ViewportProvider: React.FC<Props> = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setheight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => {
  const { width, height } = React.useContext(ViewportContext);
  return { width, height };
};
