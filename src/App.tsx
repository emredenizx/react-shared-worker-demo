import Layout from "./components/ui/Layout";
import Questionnaire from "./components/Questionnaire";
import Suggestions from "./components/Suggestions";
import Reset from "./components/Reset";
import { QUESTIONS } from "./constants/questions";

function App() {
  return (
    <Layout>
      <Reset />
      <Questionnaire title="Patient" questions={QUESTIONS} />
      <Suggestions />
    </Layout>
  );
}

export default App;
