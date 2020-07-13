import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Container from './container';
import Button from './button';

const HeroWrapper = styled.div`
  // margin-top: -80px;
  // position: relative !important;
  height: 700px;
  background: ${props => props.theme.colors.white};
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    height: unset;
    padding-top: 100px;
  }
  section {
    align-items: center;
    position: relative;
    z-index: 100;
    .content {
      position: relative;
      z-index: 100;
      width: 100%;
      // margin-left: 2rem;
      // margin-bottom: 2rem;
      @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
        width: 100%;
        margin-left: 0;
        button {
          width: 100%;
        }
      }
      h2 {
        margin: auto 0;        
        color: ${props => props.theme.colors.darkGreen} !important;         
        font-family: ${props => props.theme.fonts.heading} !important;
        font-size: 3rem;
        line-height: 6rem;
        // margin-bottom: 2rem;
        // margin-top: 0.5rem;
      }      
    }
  }
`;
const HeroImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  height: 700px;
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    display: none;
  }
  & > img {
    object-fit: 'cover' !important;
    object-position: '50% 50%' !important;
  }
  opacity: 0.4
`;

const MobileHeroImg = styled(Img)`
  margin-top: 3rem;
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    display: none;
  }
`;

const Hero = props => (
  <HeroWrapper>
    <Container>
      <div className="content">        
        <h2>{props.title}</h2>                
        <MobileHeroImg backgroundColor={'#FFFFFF'} fluid={props.mobile} />
      </div>
      <HeroImg backgroundColor={'#FFFFFF'} fluid={props.desktop} />
    </Container>
  </HeroWrapper>
);

Hero.propTypes = {
  desktop: PropTypes.object.isRequired,
  mobile: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default Hero;