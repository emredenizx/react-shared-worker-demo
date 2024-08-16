import { Answer, Question } from "@/types";
import { Button, Heading, HStack } from "@chakra-ui/react";
import { memo, useMemo } from "react";

type Props = {
  selectedAnswers: Answer[];
  question: Question;
  onSelect: (question: Question, answer: Answer) => void;
};

const MultipleChoiceQuestion = ({
  selectedAnswers = [],
  question,
  onSelect,
}: Props) => {
  const { text, answers } = question;
  const selectedAnswerIds = useMemo(
    () => selectedAnswers.map(({ id }) => id),
    [selectedAnswers]
  );

  return (
    <HStack spacing={2}>
      <Heading as="h3" size="md" mb={2} minWidth={300}>
        {text}
      </Heading>
      <HStack spacing={2} wrap={"wrap"}>
        {answers.map((answer) => {
          const isSelected = selectedAnswerIds.includes(answer.id);

          return (
            <Button
              key={answer.id}
              onClick={() => onSelect(question, answer)}
              variant={isSelected ? "solid" : "outline"}
              colorScheme={isSelected ? "blue" : "gray"}
            >
              {answer.text}
            </Button>
          );
        })}
      </HStack>
    </HStack>
  );
};

export default memo(MultipleChoiceQuestion);
