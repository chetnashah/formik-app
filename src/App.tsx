import React from 'react';
import Header from './components/Header';
import Toolbar from './components/Toolbar';

type Props = {
  title: string;
};

// this will passed on to the bottom tree using
// TeamContext.Provider
export const TeamContext = React.createContext('light');

const App : React.SFC<Props> = (props) => (
  <div>
    <h1>
      {props.title}
    </h1>
    <Header
      name="Header"
    />
    <TeamContext.Provider value='grayscale'>
      <Toolbar />
    </TeamContext.Provider>
    
  </div>
);


export default App;
