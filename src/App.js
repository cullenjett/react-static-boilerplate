import React from 'react';
import { Link, Router } from '@reach/router';

import { TodoList } from './TodoList';

export const App = () => {
  console.log('hello from <App />');

  return (
    <main>
      <header style={{ marginBottom: '20px' }}>
        <h1>React Static Site Generator Boilerplate</h1>

        <nav>
          <Link to="/">Home</Link> <Link to="about">About</Link>
        </nav>
      </header>

      <Router>
        <TodoList path="/" default />
        <HelloPage path="about" />
      </Router>
    </main>
  );
};

function HelloPage({ uri }) {
  return (
    <p>
      Hello from <code>{uri}</code>
    </p>
  );
}
