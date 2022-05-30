import { TextField } from "@fluentui/react/lib/TextField";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { useState } from "react";

// WRITE TO FIREBASE
// STORE DATA
function App() {
  const [url, setURL] = useState("");

  const onClickHandler = (_, e) => {
    setURL(e);
  };

  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "65% auto" }}>
        <div style={{ margin: "0 10px" }}>
          <TextField
            placeholder="Enter a website URL"
            onChange={onClickHandler}
          />
        </div>
        <div style={{ margin: "0 0px" }}>
          <DefaultButton text="Submit" />
        </div>
      </div>
    </div>
  );
}

export default App;
