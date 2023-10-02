// App.jsx

import React from 'react';
import ToDo from './components/ToDo'; // Assuming ToDo.jsx is in the same directory as App.jsx

const App = () => {
  return (
    <div className="App">
      <h1>My To-Do App</h1>
      <ToDo />
    </div>
  );
};

export default App;
