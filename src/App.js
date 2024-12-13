import React from 'react';
import Header from './Homepage/Header';

function App() {
  return (
    <div>
      <Header />
      <main style={{ padding: '20px', fontFamily: 'Courier New, monospace' }}>
        <h2>Welcome to the 90s Hack The Box!</h2>
        <p>Explore challenges, climb the leaderboard, and hone your hacking skills.</p>
      </main>
    </div>
  );
}

export default App;
