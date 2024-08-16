export type Answer = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
  multiSelect?: boolean;
};

export type Suggestion = {
  id: string;
  text: string;
};

export type Answers = {
  [key: Question["id"]]: Answer[];
};

export type SuggestionsMap = {
  [key: Answer["id"]]: Suggestion["id"][];
};

export type SuggestionsDictionary = {
  [key: Suggestion["id"]]: string;
};
