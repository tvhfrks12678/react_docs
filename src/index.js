import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './MainConcepts/05/Clock';
import ActionLink from './MainConcepts/06/ActionLink';
import Toggle from './MainConcepts/06/Toggle';
import LogginButton from './MainConcepts/06/LoggingButton';
import ButtonList from './MainConcepts/06/ButtonList';
import Greeting from './MainConcepts/07/Greeting';
import LoginControl from './MainConcepts/07/LoginControl';
import Mailbox from './MainConcepts/07/Mailbox';
import Page from './MainConcepts/07/Page';

import reportWebVitals from './reportWebVitals';

function Content() {
  const messages = ['React', 'Re: React', 'Re:Re: React'];
  return (
    <div>
      <h2>07</h2>
      <Page />
      <Mailbox unreadMessages={messages} />
      <LoginControl />
      {/* <Greeting isLoggedIn={true} /> */}
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
