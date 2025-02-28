import { createContext, useContext, useMemo } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const BreakpointContext = createContext();

const breakpointOrder = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4 };

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
  const context = useContext(BreakpointContext);
  if (!context) {
    throw new Error("useBreakpoint must be used within a BreakpointProvider");
  }

  return {
    ...context,
    isSmallerThan: (breakpoint) =>
      breakpointOrder[context.currentBreakpoint] < breakpointOrder[breakpoint],
    isSmallerThanOrEqual: (breakpoint) =>
      breakpointOrder[context.currentBreakpoint] <= breakpointOrder[breakpoint],
    isGreaterThan: (breakpoint) =>
      breakpointOrder[context.currentBreakpoint] > breakpointOrder[breakpoint],
    isGreaterThanOrEqual: (breakpoint) =>
      breakpointOrder[context.currentBreakpoint] >= breakpointOrder[breakpoint],
  };
}
