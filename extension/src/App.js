import { useEffect, useState } from "react";
import DetailPage from "./pages/DetailPage";
import ListView from "./pages/ListView";

// HTTP GET REQUEST FROM FIREBASE
// ROUTING
function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();
  const [showDetail, setShowDetail] = useState(false);
  const [content, getContent] = useState("");

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
          date: responseData[key].date,
          codeSnip: responseData[key].codeSnip,
          url: responseData[key].resources,
        });
      }

      setTasks(loadedTasks);
      setIsLoading(false);
    };

    fetchTasks().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  return (
    <div className="App">
      {showDetail ? (
        <DetailPage content={content} showDetail={setShowDetail} />
      ) : (
        <ListView
          tasks={tasks}
          showDetail={setShowDetail}
          getContent={getContent}
        />
      )}
    </div>
  );
}

export default App;
