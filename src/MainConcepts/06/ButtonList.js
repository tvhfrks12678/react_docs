import React from 'react';

class ButtonList extends React.Component {
  handleClickEvent(item, e) {
    console.log('item is:', item);
    console.log('event is:', e);
    console.log('this is:', this);
  }

  handleClick = (word, item, index) => {
    // e.preventDefault();

    console.log('word is:', word);
    console.log('item is:', item);
    console.log('index is:', index);
    console.log('this is:', this);
  };

  handleClickTest = (word, item) => {
    // e.preventDefault();

    console.log('word is:', word);
    console.log('item is:', item);
    // console.log('index is:', index);
    // console.log('this is:', this);
  };

  render() {
    const word = ['one', 'two', 'three'];
    return (
      <div>
        {word.map((item, index) => (
          <li key={index}>
            <button onClick={(e) => this.handleClickEvent(item, e)}>
              Click me Event
            </button>
            <button onClick={this.handleClick.bind(this, item, index)}>
              Click me
            </button>
            <button onClick={this.handleClickTest.bind(item)}>
              Click me Test
            </button>
          </li>
        ))}
      </div>
    );
  }
}

export default ButtonList;
