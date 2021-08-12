import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Gustavo Diniz</Text>
          <Text color="gray.300" fontSize="small">
            gustavodnz035@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Duegio Fernandes"
        src="https://avatars.githubusercontent.com/u/7991015?s=60&v=4"
      />
    </Flex>
  );
}
