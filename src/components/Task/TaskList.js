import Task from "./Task";

const DUMMY_TASKS = [
  {
    topic: "npm vs npx",
    description: "When should you use npm vs npx?",
    difficulty: "Easy",
    date: "9/13/21",
    timeEstimate: "30mins",
    resources:
      "https://stackoverflow.com/questions/50605219/difference-between-npx-and-npm",
  },
  {
    topic: "props.children",
    description: "Why should you use props.children?",
    difficulty: "Medium",
    date: "9/13/21",
    timeEstimate: "40mins",
    resources:
      "https://stackoverflow.com/questions/49706823/what-is-this-props-children-and-when-you-should-use-it",
  },
  {
    topic: "context api",
    description: "What is the React context API?",
    difficulty: "Medium",
    date: "9/13/21",
    timeEstimate: "45mins",
    resources: "https://dev.to/aryclenio/how-to-use-the-react-context-api-4dle",
  },
  {
    topic: "flexbox",
    description: "What are all the flexbox styling rules?",
    difficulty: "Easy",
    date: "9/13/21",
    timeEstimate: "15mins",
    resources: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  },
  {
    topic: "multiple classes",
    description: "How do you include multiple classes?",
    difficulty: "Easy",
    date: "9/13/21",
    timeEstimate: "5mins",
    resources:
      "https://github.com/cammyp/design-challenge/blob/main/src/components/Layout/HeaderCartButton.js",
  },
];

const TaskList = () => {
  const taskList = DUMMY_TASKS.map((task) => (
    <Task
      topic={task.topic}
      des={task.description}
      diff={task.difficulty}
      date={task.date}
      time={task.timeEstimate}
      url={task.resources}
      res={"Read article"}
    />
  ));

  return <div>{taskList}</div>;
};

export default TaskList;
