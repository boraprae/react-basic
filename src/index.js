import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent'

const root = ReactDOM.createRoot(document.getElementById('root'));
//!Create functional component
// function HelloComponent(){
// return <h1>Hi Component</h1>
// }
//!Create Class component
// class HelloComponent extends React.Component{
//   render(){
//     return <h1>Hi Class Component</h1>
//   }
// }


root.render(
//<HelloComponent/>
 <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
