import React from 'react';
import PropTypes from 'prop-types';

const App = ({ title }) => (
  <h1>
    {title}
  </h1>
);

App.propTypes = {
  title: PropTypes.string,
};

App.defaultProps = {
  title: 'Hello',
};

export default App;
