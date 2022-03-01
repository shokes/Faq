import "./App.css";
import { React, useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [question, setQuestion] = useState(data);
  // console.log(question);
  return (
    <main className="container">
      <header>
        <h3>Frequently asked Questions</h3>
      </header>
      <section>
        {question.map((quest) => {
          return <Question key={quest.id} {...quest} />;
        })}
      </section>
    </main>
  );
}

export default App;
