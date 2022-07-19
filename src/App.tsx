import React from 'react';
import './App.css';
import { MuiNavbar } from './components/navbar';
import TableauEmbed from './components/TableauEmbed';
import { Team } from './components/team';

function App() {
  return (
    <><div className="App">
      <h1>HI</h1>
      <MuiNavbar />
      <Team />
    </div><div>
        <TableauEmbed />
      </div></>
  );
}

export default App;
