import React from 'react';
import Header from './components/Header';

type Props = {
  title: string;
};

const App : React.SFC<Props> = (props) => (
  <div>
    <h1>
      {props.title}
    </h1>
    <Header
      name="Header"
    />
  </div>
);


export default App;
