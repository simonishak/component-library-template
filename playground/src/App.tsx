import "./App.css";
import { TextBox, TextInput } from "my-component-app";

function App() {
  return (
    <div className="App">
      <TextBox text="Banana"></TextBox>
      <TextInput defaultText="Test" placeholder="Testing lsol"></TextInput>
    </div>
  );
}

export default App;
