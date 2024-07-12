import { useMediaQuery } from "react-responsive";

type DeviceSize =
  | "mobile320"
  | "mobile380"
  | "mobile"
  | "small"
  | "medium"
  | "large"
  | "large1240"
  | "large1320"
  | "large1400"
  | "large1480"
  | "mobile460";

const deviceSize: { [key in DeviceSize]: [number, number] } = {
  mobile320: [0, 320],
  mobile380: [321, 380],
  mobile460: [381, 460],
  mobile: [461, 575],
  small: [576, 767],
  medium: [768, 991],
  large: [992, 1240],
  large1240: [1241, 1320],
  large1320: [1321, 1400],
  large1400: [1401, 1480],
  large1480: [1481, 1920],
};

enum KeySizes {
  default,
  screen320,
  screen380,
  screen460,
  screen570,
  screen770,
  screen990,
  screen1240,
  screen1320,
  screen1400,
  screen1480,
  screen1920,
  isMobileSize,
}

type EnumKeys = keyof typeof KeySizes;

export type IParams<T> = {
  [key in EnumKeys]?: T;
};

export const screenSizePriority: EnumKeys[] = [
  /* Mobile screen sizes */
  "screen320",
  "screen380",
  "screen460",
  "screen570",
  "screen770",
  "screen990",
  "isMobileSize",

  /* PC browser window sizes */
  "screen1240",
  "screen1320",
  "screen1400",
  "screen1480",
  "screen1920",
];

export const useDeviceSize = () => {
  const screen320 = useMediaQuery({
    maxWidth: deviceSize.mobile320[1],
  });
  const screen380 = useMediaQuery({
    maxWidth: deviceSize.mobile380[1],
  });
  const screen460 = useMediaQuery({
    maxWidth: deviceSize.mobile460[1],
  });
  const screen570 = useMediaQuery({
    maxWidth: deviceSize.mobile[1],
  });
  const screen770 = useMediaQuery({
    maxWidth: deviceSize.small[1],
  });
  const screen990 = useMediaQuery({
    maxWidth: deviceSize.medium[1],
  });
  const screen1240 = useMediaQuery({
    maxWidth: deviceSize.large[1],
  });
  const screen1320 = useMediaQuery({
    maxWidth: deviceSize.large1240[1],
  });
  const screen1400 = useMediaQuery({
    maxWidth: deviceSize.large1320[1],
  });
  const screen1480 = useMediaQuery({
    maxWidth: deviceSize.large1400[1],
  });

  const screen1920 = useMediaQuery({
    maxWidth: deviceSize.large1480[1],
  });

  return {
    screen320,
    screen380,
    screen460,
    screen570,
    screen770,
    screen990,
    screen1240,
    screen1320,
    screen1400,
    screen1480,
    screen1920,

    isMobileSize: screen990,
  };
};
