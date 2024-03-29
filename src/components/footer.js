import React from 'react';
import styled from 'styled-components';
import Button from './button';
import Container from './container';
import Link from 'gatsby-link';
import { graphql, useStaticQuery } from 'gatsby';

// Date
const d = new Date();
const y = d.getFullYear();

const FooterWrapper = styled.div`
  background: white;
  padding-top: 3rem;
  margin-bottom: 1rem;
  position: relative;
  &:after {
    content: '';
    height: 1rem;
    width: 100%;
    position: absolute;
    bottom: -1rem;
    left: 0;
    background: ${props => props.theme.gradients.green};
  }
  section {
    width: 1020px;
    max-width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    .copy {
      width: 100%;
      text-align: center;
      margin-top: 4rem;
      margin-bottom: 2rem;
      a {
        color: ${props => props.theme.colors.black};
        font-weight: 500;
        text-decoration: none;
        position: relative;
        transition: all 0.3s ease;
        padding: 0.2rem 0.4rem;
        z-index: 10;
        &:hover {
        //   color: white;
          &::before {
            height: 100%;
            width: 100%;
            opacity: 1;
          }
        }
        &:before {
          z-index: -1;
          content: '';
          position: absolute;
          height: 0%;
          width: 100%;
          bottom: -1px;
          left: 0;
          opacity: 1;
          transition: all 0.3s ease;
        //   background: ${props => props.theme.gradients.red};
        }
      }
    }    
  }
`;

const footerQuery = graphql`
  {
    site {
      siteMetadata {
        social {
          twitter          
        }
      }
    }
  }
`;

const Footer = () => {
  const data = useStaticQuery(footerQuery);
  const {
    twitter    
  } = data.site.siteMetadata.social;
  return (
    <FooterWrapper>
      <Container>        
        <div className="copy">
          <span>
            Made for the Valley School, with love and gratitude.
          </span>
          <br />
          <span>
            &copy; Copyright {y} − <Link to={'https://thevalleyschool.info'}>The Valley School</Link>
          </span>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;