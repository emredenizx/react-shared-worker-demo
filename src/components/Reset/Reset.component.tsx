import useAnswersStore from "@/store/answers";
import { Box, Button } from "@chakra-ui/react";

const Reset = () => {
  const onReset = () => useAnswersStore.getState().resetAnswers();

  return (
    <Box display={"flex"} flex={1} justifyContent={"flex-end"}>
      <Button colorScheme="red" onClick={onReset}>
        Reset
      </Button>
    </Box>
  );
};

export default Reset;
