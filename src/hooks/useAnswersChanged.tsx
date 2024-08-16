import { useEffect } from "react";
import useSuggestionsWorker from "./useSuggestionsWorker";
import { Answers } from "@/types";

const useAnswersChanged = (answers: Answers) => {
  const worker = useSuggestionsWorker();
  useEffect(() => worker.postMessage(answers), [worker]);
};

export default useAnswersChanged;
