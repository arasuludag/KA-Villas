import {
  extendTheme,
  withDefaultColorScheme,
  baseTheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      brand: baseTheme.colors.green,
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default theme;
