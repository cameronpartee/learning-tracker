import { TextField } from "@fluentui/react/lib/TextField";
import { DefaultButton } from "@fluentui/react/lib/Button";

function App() {
  return (
    <div className="App">
      <div style={{ display: "grid", gridTemplateColumns: "65% auto" }}>
        <div style={{ margin: "0 10px" }}>
          <TextField placeholder="Enter a website URL" />
        </div>
        <div style={{ margin: "0 0px" }}>
          <DefaultButton text="Submit" />
        </div>
      </div>
    </div>
  );
}

export default App;
