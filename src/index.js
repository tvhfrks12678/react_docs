import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user) {
  return user.firstName + '' + user.lastName;
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl:
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
};

const elementCreateElement = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

const element = (
  <div tabIndex="0">
    <img src={user.avatarUrl} />
    <img src={user.avatarUrl}></img>
    <h1>
      {getGreeting('')}Hello, {getGreeting(user)}!
    </h1>
    <h2>Good to see you here.</h2>
  </div>
);

// ReactDOM.render(
//   elementCreateElement,
//   // element,
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>,
//   document.getElementById('root')
// );

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
