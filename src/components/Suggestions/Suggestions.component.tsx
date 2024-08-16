import useSuggestionsWorker from "@/hooks/useSuggestionsWorker";
import { Badge, Box, Heading, HStack, Kbd } from "@chakra-ui/react";
import { useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  useSuggestionsWorker(setSuggestions);

  return (
    <Box p={4} minHeight={240}>
      <Heading as="h1" size="xl" mb={4}>
        Suggestions
      </Heading>
      <HStack spacing={2} wrap={"wrap"}>
        {suggestions.length === 0 && <Kbd>Start answering above questions</Kbd>}
        {suggestions.map((suggestion, i: number) => (
          <Badge key={i} colorScheme="green">
            {suggestion}
          </Badge>
        ))}
      </HStack>
    </Box>
  );
};

export default Suggestions;
