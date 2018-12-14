/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from '../styled-components';
//import PropTypes from 'prop-types';

const NiceHeader = styled.h2`
    font-size: 1.5em;
    text-align: 'center';
    color: violet;
    `;

    type ButtonProps = {
      huge?: boolean;
    };
    // huge is a possible prop that can be passed to Button
const Button = styled.button<ButtonProps>`
  background: ${props => props.theme.primary ? 'palevioletred' : 'white'};
  color: ${props => props.theme.primary ? 'white' : 'palevioletred'};
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
    ${props => props.theme.huge ? 'font-size: 2.5em;' : ''}
    border-radius: 8px;
`;

type HeaderProps = {
  name?: string;
}

const Header : React.SFC<HeaderProps> = ({ name }) => (
  <NiceHeader>
    {name}
    <Button huge={true}>
      {'hola'}
    </Button>
    <Button>
      {'lola'}
    </Button>
    <OverrideButton>
      {'Override-Button'}
    </OverrideButton>
  </NiceHeader>
);


Header.defaultProps = {
  name: 'Header name',
};

export default Header;
