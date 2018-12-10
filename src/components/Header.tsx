/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NiceHeader = styled.h2`
    font-size: 1.5em;
    text-align: 'center';
    color: violet;
    `;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: ${props => props.huge ? '2px solid palevioletred' : '1px dashed blue'};
  border-radius: 3px;
`;

/**
 * overriding component along with props customization
 * all props are also passed through to Button
 */
const OverrideButton = styled(Button)`
    padding: 0px;
    border: 3px solid green;
    ${props => props.huge ? 'font-size: 2.5em;' : ''}
    border-radius: 8px;
`;

const Header = ({ name }) => (
  <NiceHeader>
    {name}
    <Button primary>
      {'hola'}
    </Button>
    <OverrideButton huge>
      {'Override-Button'}
    </OverrideButton>
  </NiceHeader>
);


Header.defaultProps = {
  name: 'Header name',
};

export default Header;
