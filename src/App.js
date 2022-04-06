import Add from "./components/AddTasks";
import ListTasks from "./components/ListTasks";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Add />
      <br />
      <ListTasks />
    </div>
  );
}
