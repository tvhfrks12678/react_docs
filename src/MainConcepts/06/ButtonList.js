import React from 'react';

class ButtonList extends React.Component {
  handleClick(item, e) {
    console.log('item is:', item);
    console.log('event is:', e);
  }

  render() {
    const word = ['one', 'two', 'three'];
    return (
      <div>
        {word.map((item, index) => (
          <li key={index}>
            <button onClick={(e) => this.handleClick(item, e)}>Click me</button>
          </li>
        ))}
      </div>
    );
  }
}

export default ButtonList;
