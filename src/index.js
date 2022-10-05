import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App'
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './components/HelloComponent'
import AppVer from './AppVer';

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
//  <App/>
  <App2/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
