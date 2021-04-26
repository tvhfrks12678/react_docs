import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './MainConcepts/05/Clock';
import ActionLink from './MainConcepts/06/ActionLink';
import Toggle from './MainConcepts/06/Toggle';
import LogginButton from './MainConcepts/06/LoggingButton';
import ButtonList from './MainConcepts/06/ButtonList';

import reportWebVitals from './reportWebVitals';

// class ButtonList extends React.Component {
//   handleClick(item, e) {
//     console.log('item is:', item);
//     //console.log('event is:', e)
//     //console.log('this is:', this)
//   }
//   render() {
//     const arr = ['hoge', 'fuga', 'piyo'];

//     return (
//       <div>
//         {arr.map((item) => (
//           <button onClick={(e) => this.handleClick(item, e)}>Click me</button>
//         ))}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ButtonList />, document.getElementById('root'));

function Content() {
  return (
    <div>
      <h2>06</h2>
      <ButtonList />
      <LogginButton />
      <Toggle />
      <ActionLink />
      <h2>05</h2>
      <Clock increment="3" />
    </div>
  );
}

ReactDOM.render(<Content />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
