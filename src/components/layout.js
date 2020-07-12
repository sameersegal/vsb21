import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import styled, { ThemeProvider } from 'styled-components';

// import GlobalStyle from '../styles/Global';
import Theme from '../styles/Theme';

import Header from './Header';
// import Footer from './Footer';

const SiteRoot = styled.div`
  background: white;
  padding-top: 80px;
`;

const Layout = ({ location, title, children }) => {  
  return (
    <SiteRoot>
      <ThemeProvider theme={Theme}>
        <>
          <Header location={location} />
          {children}
          {/* <Footer /> */}
        </>
      </ThemeProvider>      
    </SiteRoot>
  )
}

export default Layout
