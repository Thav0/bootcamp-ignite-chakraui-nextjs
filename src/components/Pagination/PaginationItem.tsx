import { Button } from "@chakra-ui/react";
import React from "react";

interface PaginationItemProps {
  isCurrent?: boolean;
  page: number;
}

export function PaginationItem({
  isCurrent = false,
  page,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        colorScheme="pink"
        disabled
        _disabled={{
          bg: "pink.500",
          cursor: "default",
        }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      w="4"
      bg="gray.700"
      _hover={{
        bg: "gray.500",
      }}
    >
      {page}
    </Button>
  );
}
