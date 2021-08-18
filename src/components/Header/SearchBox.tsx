import { Flex, Icon, Input } from "@chakra-ui/react";
import React from "react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  // Controlled components são melhores para formulários menores
  // Observamos o valor do input enquanto esta a ser digitado

  // uncontroled component
  // imperative
  //  Interface imperativa é quando dizemos o que queremos fazer no código
  // Exe.: Quando damos uma instrução ao input como o focus()

  // A declarativa é quando damos alguma instrução que esperamos que aconteça de forma automatica
  // Exe.: <Input focus={searchActive === true} /> -> faça algo
  const searchInputRef = useRef<HTMLInputElement>(null);

  // console.log(searchInputRef.current.value ?? "");

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={600}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        px="4"
        mr="4"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
