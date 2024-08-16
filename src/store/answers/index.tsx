import { Answers } from "@/types";
import { produce } from "immer";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface AnswersStore {
  answers: Answers;
  setAnswers: (answers: Answers) => void;
  resetAnswers: () => void;
}

const useAnswersStore = create<AnswersStore>()(
  devtools(
    persist(
      (set) => ({
        answers: {},
        setAnswers: (answers) =>
          set((store) =>
            produce(store, (draft) => {
              draft.answers = answers;
            })
          ),
        resetAnswers: () =>
          set((store) =>
            produce(store, (draft) => {
              draft.answers = {};
            })
          ),
      }),
      {
        name: "answers-storage",
        partialize: ({ answers }) => ({ answers }),
      }
    )
  )
);

export default useAnswersStore;
