import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AlertComponent from "./components/AlertComponent";

function App() {
  return (
      AlertComponent({type: "success", text: "This is a success alert!"})
  );
}

export default App;
