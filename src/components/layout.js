import React from "react"
import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import GlobalFonts from '../styles/fonts';
import Theme from '../styles/theme';

import Header from './header';
// import Footer from './Footer';

const SiteRoot = styled.div`
  background: white;
  padding-top: 80px;
  font-family: 'Cormorant Garamond', serif;
`;

// font-family: ${props => props.theme.fonts.copy}

const Layout = ({ location, title, links, children }) => {  
  return (
    <SiteRoot>
      <GlobalFonts/>
      <GlobalStyle/>
      <ThemeProvider theme={Theme}>        
        <>
          <Header location={location} links={links} />
          {children}
          {/* <Footer /> */}
        </>
      </ThemeProvider>      
    </SiteRoot>
  )
}

export default Layout
