import React from 'react';
import './App.css';
import GlobalState from './Context/GlobalState';

const Test1 = () => {
  const getOne = GlobalState.useStoreState(state => state.getSomething1);
  const setOn  = GlobalState.useStoreActions(actions => actions.setOn);
  const on     = GlobalState.useStoreState(state => state.on);

  return <>
  <label>
    On:{' '}
    {/* Checking this box fires off all fetch requests */}
    <input type="checkbox" 
           checked={on} 
           onChange={e => setOn(e.target.checked)} />
  </label>
  </>
}

function App() {
  return (
    <GlobalState.Provider>
      <div className="App">
        <header className="App-header">
          <Test1 />
        </header>
      </div>
    </GlobalState.Provider>
  );
}

export default App;
