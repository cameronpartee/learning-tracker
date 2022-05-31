import { TextField } from "@fluentui/react/lib/TextField";
import { DefaultButton } from "@fluentui/react/lib/Button";
import { useState } from "react";
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
} from "@fluentui/react";

const labelStyles = {
  root: { marginTop: 10 },
};

// WRITE TO FIREBASE
// STORE DATA
function App() {
  const [url, setURL] = useState("");

  const onClickHandler = (_, e) => {
    setURL(e);
  };

  return (
    <div
      className="App"
      style={{
        height: "100vh",
      }}
    >
      <div>Enter URL</div>
      <div
        style={{
          display: "flex",
          justifyCntent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "80% auto",
            width: "100%",
          }}
        >
          <div
            style={{
              margin: "0 15px",
            }}
          >
            <TextField
              placeholder="Enter a website URL"
              onChange={onClickHandler}
            />
          </div>
          <div
            style={{
              margin: "0 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <DefaultButton text="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
