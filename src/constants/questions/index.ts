import { Question } from "@/types";

export const QUESTIONS: Question[] = [
  {
    id: "q1",
    text: "Age",
    answers: [
      { id: "a1", text: "15-20" },
      { id: "a2", text: "21-30" },
      { id: "a3", text: "31-40" },
      { id: "a4", text: "41-50" },
      { id: "a5", text: "51+" },
    ],
  },
  {
    id: "q2",
    text: "Gender",
    answers: [
      { id: "a6", text: "Male" },
      { id: "a7", text: "Female" },
    ],
  },
  {
    id: "q3",
    text: "Symptoms",
    answers: [
      { id: "a8", text: "Cough" },
      { id: "a9", text: "Fever" },
      { id: "a10", text: "Headache" },
      { id: "a11", text: "Sore Throat" },
      { id: "a12", text: "Nausea" },
      { id: "a13", text: "Fatigue" },
      { id: "a14", text: "Muscle Pain" },
      { id: "a15", text: "Runny Nose" },
    ],
    multiSelect: true,
  },
  {
    id: "q4",
    text: "Duration of Symptoms",
    answers: [
      { id: "a16", text: "Less than a week" },
      { id: "a17", text: "Longer than a week" },
    ],
  },
  {
    id: "q5",
    text: "Severity of Symptoms",
    answers: [
      { id: "a18", text: "Mild" },
      { id: "a19", text: "Moderate" },
      { id: "a20", text: "Severe" },
    ],
  },
  {
    id: "q6",
    text: "Chronic Conditions",
    answers: [
      { id: "a21", text: "Diabetes" },
      { id: "a22", text: "Hypertension" },
      { id: "a23", text: "Asthma" },
      { id: "a24", text: "None" },
    ],
    multiSelect: true,
  },
];
