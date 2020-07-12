import React from "react"
import styled, { ThemeProvider } from 'styled-components';

import GlobalFonts from '../styles/fonts';
import Theme from '../styles/Theme';

import Header from './Header';
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
