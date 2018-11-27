import React, { useState } from 'react';
import { Link, Router } from '@reach/router';

export const App = () => {
  console.log('hello from <App />');

  return (
    <div>
      <h1>App</h1>

      <nav>
        <Link to="/">Home</Link> <Link to="hello-world">Hello World</Link>
      </nav>

      <Router>
        <InputMirror path="/" default />
        <Page path="hello-world" />
      </Router>
    </div>
  );
};

function InputMirror() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>Input mirror</h2>
      <input
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <p>{inputValue}</p>
    </div>
  );
}

function Page({ path }) {
  return <h2>Hello from {path}</h2>;
}
