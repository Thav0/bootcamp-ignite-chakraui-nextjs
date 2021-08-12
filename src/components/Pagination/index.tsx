import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row">
        <PaginationItem isCurrent page={1} />
        <PaginationItem page={2} />
        <PaginationItem page={3} />
        <PaginationItem page={4} />
        <PaginationItem page={5} />
      </Stack>
    </Stack>
  );
}