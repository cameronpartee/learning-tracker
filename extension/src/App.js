import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailPage from "./pages/DetailPage";
import ListView from "./pages/ListView";

// HTTP GET REQUEST FROM FIREBASE
// ROUTING
function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

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
          id: key,
          topic: responseData[key].topic,
          description: responseData[key].description,
          difficulty: responseData[key].difficulty,
          date: responseData[key].date,
          timeEstimate: responseData[key].timeEstimate,
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListView tasks={tasks} />}></Route>
          <Route
            path="/detail"
            element={<DetailPage task={tasks[8]} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
