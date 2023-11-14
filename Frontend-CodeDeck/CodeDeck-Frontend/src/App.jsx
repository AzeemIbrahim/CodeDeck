import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const problems1 = [
  {
    title: "SpeedRange",
    difficulty: "Hard",
    acceptance: "80%",
  },
  {
    title: "Pendulum",
    difficulty: "Hard",
    acceptance: "80%",
  },
  {
    title: "Intermediatery",
    difficulty: "Easy",
    acceptance: "80%",
  },
];
const problems2 = [
  {
    title: "WorkDone",
    difficulty: "Easy",
    acceptance: "30%",
  },
  {
    title: "TwoSum",
    difficulty: "Hard",
    acceptance: "80%",
  },
  {
    title: "Depth",
    difficulty: "Hard",
    acceptance: "80%",
  },
];
function App() {
  const [problems, set] = useState([]);
  return (
    <div>
      <input type="text" placeholder="email"></input>
      <input type="text" placeholder="password"></input>
      <button>SignIN</button>
      <div>
        <button
          onClick={() => {
            set((problems) => problems1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            set((problems) => problems2);
          }}
        >
          {" "}
          2
        </button>
      </div>
      <div>
        {problems.map((problem) => (
          <ProblemStatement
            title={problem.title}
            difficulty={problem.difficulty}
            acceptance={problem.acceptance}
          />
        ))}
      </div>
    </div>
  );
  b;
}
function ProblemStatement(props) {
  const title = props.title;
  const difficulty = props.difficulty;
  const acceptance = props.acceptance;

  return (
    <tr>
      <td>{title}</td>
      <td style={{ color: difficulty === "Easy" ? "green" : "red" }}>
        {difficulty}
      </td>
      <td>{acceptance}</td>
    </tr>
  );
}

export default App;
