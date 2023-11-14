const problems = [
  {
    title: "SpeedRange",
    Difficulty: "Hard",
    Acceptance: "80%",
  },
  {
    title: "Pendulum",
    Difficulty: "Hard",
    Acceptance: "80%",
  },
  {
    title: "Intermediatery",
    Difficulty: "Hard",
    Acceptance: "80%",
  },
];
const problems2 = [
  {
    title: "WorkDone",
    Difficulty: "Easy",
    Acceptance: "30%",
  },
  {
    title: "TwoSum",
    Difficulty: "Hard",
    Acceptance: "80%",
  },
  {
    title: "Depth",
    Difficulty: "Hard",
    Acceptance: "80%",
  },
];
function renderproblems1() {
  const parentEl = document.getElementById("Problems");
  parentEl.innerHTML = "";
  renderproblems(problems);
}
function renderproblems2() {
  const parentEl = document.getElementById("Problems");
  parentEl.innerHTML = "";
  renderproblems(problems2);
}
function renderproblems(problemsprovided) {
  const parentEl = document.getElementById("Problems");
  const tabletag = document.createElement("table");
  for (let i = 0; i < problemsprovided.length; i++) {
    const trtag = document.createElement("tr");
    const tdEl1 = document.createElement("td");
    tdEl1.innerHTML = problemsprovided[i].title;
    const tdEl2 = document.createElement("td");
    tdEl2.innerHTML = problemsprovided[i].Difficulty;
    const tdEl3 = document.createElement("td");
    tdEl3.innerHTML = problemsprovided[i].Acceptance;

    trtag.appendChild(tdEl1);
    trtag.appendChild(tdEl2);
    trtag.appendChild(tdEl3);
    tabletag.appendChild(trtag);
  }
  parentEl.appendChild(tabletag);
}
