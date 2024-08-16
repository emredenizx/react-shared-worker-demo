import { useShallow } from "zustand/react/shallow";
import { useCallback } from "react";
import { Answer, Answers, Question } from "@/types";
import useAnswersStore from "@/store/answers";

function getUpdated(question: Question, answer: Answer): Answers {
  const answers = useAnswersStore.getState().answers;

  const isMultiselect = question.multiSelect;
  const currentAnswers = answers[question.id] || [];
  const currentAnswerIds = currentAnswers.map(({ id }) => id);

  let update = [];

  if (isMultiselect) {
    if (answer.text === "None") {
      update = [answer];
    } else {
      update = currentAnswerIds.includes(answer.id)
        ? currentAnswers.filter(({ id }) => id !== answer.id)
        : currentAnswers.filter(({ text }) => text !== "None").concat(answer);
    }
  } else {
    update = [answer];
  }

  return {
    ...answers,
    [question.id]: update,
  };
}

const useAnswers = () => {
  const store = useAnswersStore(useShallow((store) => store));

  const onSelect = useCallback(
    (question: Question, answer: Answer) => {
      store.setAnswers(getUpdated(question, answer));
    },
    [store.setAnswers]
  );

  return { answers: store.answers, onSelect };
};

export default useAnswers;
