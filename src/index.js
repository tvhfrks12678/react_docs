import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), comment: 'hello', counter: 1, posts: [] };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.timmerCommentID = setInterval(() => this.tickComment(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    clearInterval(this.timmerCommentID);
  }

  tick() {
    this.setState((state, props) => ({
      date: new Date(),
      counter: state.counter + props.increment,
    }));
  }

  tickComment() {
    this.setState({
      comment: `Comment ${new Date()}`,
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
        <h3>Test is {this.state.comment}</h3>
        <h4>Counter is {this.state.counter}</h4>
      </div>
    );
  }
}

function TripleClock() {
  return (
    <div>
      <Clock increment="1" />
      <Clock increment="2" />
      <Clock increment="3" />
    </div>
  );
}

ReactDOM.render(<TripleClock />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
