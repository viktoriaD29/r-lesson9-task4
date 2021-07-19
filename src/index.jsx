import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector('#root');

const users = [
  { name: 'Tom', age: 14, id: 1 },
  { name: 'Bob', age: 67, id: 2 },
  { name: 'Ann', age: 34, id: 3 },
  { name: 'Oleg', age: 24, id: 4 },
  { name: 'Alex', age: 10, id: 5 },
];

ReactDOM.render(<UsersList users={users}/>, rootElement);
