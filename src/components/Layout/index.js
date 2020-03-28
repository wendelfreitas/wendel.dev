import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import { Wrapper, Main } from './styles';
import GlobalStyle from '../../styles/global';
import Particles from '../Particles';

const Layout = ({ children, padding }) => (
  <Wrapper>
    <GlobalStyle />
    <TransitionPortal level="top">
      <Sidebar />
    </TransitionPortal>
    <Particles />
    <Main padding={padding}>{children}</Main>
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number
};

Layout.defaultProps = {
  padding: 8
};

export default Layout;
