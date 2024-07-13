import { useMediaQuery } from "react-responsive";

export const useDeviceSize = () => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 991 });
  const isDesktop = useMediaQuery({ minWidth: 992 });

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};
