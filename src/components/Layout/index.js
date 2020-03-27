import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import { Wrapper, Main } from './styles';
import GlobalStyle from '../../styles/global';
import Particles from '../Particles';

const Layout = ({ children }) => (
  <Wrapper>
    <GlobalStyle />
    <Sidebar />
    <Particles />
    <Main>{children}</Main>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
