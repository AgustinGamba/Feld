import { createContext, useContext, useMemo } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const BreakpointContext = createContext();

export function BreakpointProvider({ children }) {
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isLg = useMediaQuery(theme.breakpoints.between("lg", "xl"));
  const isXl = useMediaQuery(theme.breakpoints.up("xl"));

  const currentBreakpoint = useMemo(() => {
    if (isXs) return "xs";
    if (isSm) return "sm";
    if (isMd) return "md";
    if (isLg) return "lg";
    if (isXl) return "xl";
    return "unknown";
  }, [isXs, isSm, isMd, isLg, isXl]);

  return (
    <BreakpointContext.Provider value={{ currentBreakpoint }}>
      {children}
    </BreakpointContext.Provider>
  );
}

export function useBreakpoint() {
  return useContext(BreakpointContext);
}
