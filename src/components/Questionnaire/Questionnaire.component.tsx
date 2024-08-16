import { Box, Heading, VStack } from "@chakra-ui/react";
import MultipleChoiceQuestion from "../MultipleChoiceQuestion";
import { Question } from "@/types";
import useAnswers from "@/hooks/useAnswers";
import useAnswersChanged from "@/hooks/useAnswersChanged";

type Props = {
  title: string;
  questions: Question[];
};

const Questionnaire = ({ title, questions }: Props) => {
  const { answers, onSelect } = useAnswers();
  useAnswersChanged(answers);

  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        {title}
      </Heading>
      <VStack spacing={4} alignItems={"flex-start"}>
        {questions.map((question) => (
          <MultipleChoiceQuestion
            key={question.id}
            question={question}
            selectedAnswers={answers[question.id]}
            onSelect={onSelect}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default Questionnaire;
