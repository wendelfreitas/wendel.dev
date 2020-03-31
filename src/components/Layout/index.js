import React from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Sidebar from '../Sidebar';
import { Wrapper, Main } from './styles';
import GlobalStyle from '../../styles/global';
import Particles from '../Particles';
import { main } from '../../styles/themes';

const Layout = ({ children, padding }) => (
  <ThemeProvider theme={main}>
    <Wrapper>
      <Particles />
      <GlobalStyle />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <Main padding={padding}>{children}</Main>
    </Wrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number
};

Layout.defaultProps = {
  padding: 8
};

export default Layout;
