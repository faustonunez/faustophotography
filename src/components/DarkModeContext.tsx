import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const DarkModeContext = createContext<{
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}>({ darkMode: false, setDarkMode: () => {} });

export function useDarkMode() {
  return useContext(DarkModeContext);
}

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const localData = localStorage.getItem("darkMode");
    return localData ? JSON.parse(localData) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
