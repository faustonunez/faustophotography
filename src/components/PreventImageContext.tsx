// PreventImageContext.tsx

import { ReactNode, useEffect } from "react";

type PreventImageContextProps = {
  children: ReactNode;
};

const PreventImageContext = ({ children }: PreventImageContextProps) => {
  useEffect(() => {
    const handleRightClick = (event: MouseEvent) => {
      if (event.target instanceof HTMLImageElement) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);

  return <>{children}</>;
};

export default PreventImageContext;
