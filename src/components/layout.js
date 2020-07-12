import React from "react"
import styled, { ThemeProvider } from 'styled-components';

// import GlobalStyle from '../styles/Global';
import GlobalFonts from '../styles/fonts/fonts';
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
      <GlobalFonts/>
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
