import "./App.css";
// TODO: Fix why it gives error
// @ts-ignore
import { TextBox, TextInput, UnifyList, Table } from "my-component-app";

function App() {
  return (
    <div className="App">
      <TextBox text="Banana"></TextBox>
      <TextInput defaultText="Test" placeholder="Testing lsol"></TextInput>
      <UnifyList items={[{ text: "Item 1" }, { text: "Item 3" }]} />
      <Table />
    </div>
  );
}

export default App;
