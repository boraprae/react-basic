import * as React from "react";
import Transection from "./components/Transaction";
import Person from "./components/Person";
import "./App.css";
const design = { color: "purple", textAlign: "center" };

function App() {
  const currentYear = new Date().getFullYear();
  const birthYear = 2004;
  const students = ["Rei", "Eseo", "Gaeun", "Wonyoung", "Yujin", "Liz"];
  const url = "https://www.google.com";
  const user = [
    { text: "Wonyoung Ive1", picture: "/images/w1.jpg" },
    { text: "Wonyoung Ive2", picture: "/images/w2.jpg" },
    { text: "Wonyoung Ive3", picture: "/images/w3.jpg" },
  ];
  return (
    <div className="container">
      {/* <h1 style={design}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
      <Transection/> */}
      <h1>This year is IVE {currentYear}</h1>
      <h1>You are {currentYear - birthYear} years old</h1>
      <h3>{students.join(" ")}</h3>
      <a href={url}>Google</a>
      <div>
        {user.map((e, index) => {
          return (
          <Person {...e} key={index}/>
          );   
        })}
      </div>
    </div>
  );
}

export default App;
