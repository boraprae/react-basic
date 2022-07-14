import Transection from "./components/Transaction";
import './App.css';
const design = {color:'purple', textAlign: 'center'};

function App() {
  return (
    <div className="container">
      <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <Transection />
    </div>
  );
}

export default App;
