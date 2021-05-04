import React from 'react';

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) => <li key={numbers}>{numbers}</li>);

export default listItems;
