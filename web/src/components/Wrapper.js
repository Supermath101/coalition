import { Box } from "@chakra-ui/react";
import React from "react";

export const Wrapper = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "90%" : "50%"}
      w="100%"
      mt={8}
      mx="auto"
    >
      {children}
    </Box>
  );
};
