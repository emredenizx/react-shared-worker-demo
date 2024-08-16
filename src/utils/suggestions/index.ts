import {
  SUGGESTIONS_MAP,
  SUGGESTIONS_DICTIONARY,
} from "@/constants/suggestions";
import { Answers } from "@/types";

const getKeys = (answers: Answers) =>
  Object.values(answers)
    .flat()
    .reduce(
      (keys: string[], answer) => [
        ...keys,
        ...(SUGGESTIONS_MAP[answer.id] || []),
      ],
      []
    );

const getTexts = (suggestionKeys: string[]) =>
  suggestionKeys.reduce(
    (texts: string[], key) => [...texts, SUGGESTIONS_DICTIONARY[key]],
    []
  );

function generateSuggestions(answers: Answers) {
  return getTexts([...new Set(getKeys(answers))]);
}

export default generateSuggestions;
