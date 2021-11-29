import { useEffect, useState } from "react";
import DetailView from "./pages/DetailPage";
import HomeListView from "./pages/ListView";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [startIndex, setStartIndex] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch(
        "https://learningtracker-a8476-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const responseData = await response.json();
      const loadedTasks = [];

      for (const key in responseData) {
        loadedTasks.push({
          key: Math.random(),
          id: key,
          description: responseData[key].description,
          difficulty: responseData[key].difficulty,
          topic: responseData[key].topic,
          codeSnip: responseData[key].codeSnip,
          url: responseData[key].resources,
          img: responseData[key].img,
        });
      }

      setTasks(loadedTasks);
    };

    fetchTasks();
  }, []);

  return (
    <div className="App">
      {showDetail ? (
        <DetailView
          tasks={tasks}
          showHome={setShowDetail}
          startIndex={startIndex}
        />
      ) : (
        <HomeListView
          tasks={tasks}
          showDetail={setShowDetail}
          setStartIndex={setStartIndex}
        />
      )}
    </div>
  );
}

export default App;
