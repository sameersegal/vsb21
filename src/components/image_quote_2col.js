import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './container';
import Img from 'gatsby-image';

const Container2 = styled(Container)`
  height: 70%;
`

const IQsWrapper = styled.div`
  background: white;
  margin-bottom: 10rem;
  section {
    .title {
      h2 {
        // color: ${props => props.theme.colors.red};
        margin-bottom: 2rem;
      }
    }
  }
`;

const IQBlockWrapper = styled.div`
  background: ${props => props.bg};
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    height: 95rem;
  }
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    padding-top: 4rem;
    section {
      flex-wrap: wrap;
      .left,
      .right {
        width: 100% !important;
      }
    }
  }
  section {
    height: 100%;
    align-items: center;
    .right {
      width: 60%;
      .p__title {
        h3 {
        //   color: white;
          font-family: ${props => props.theme.fonts.heading} !important;
          font-weight: 800;
          font-size: 2rem;
          line-height: 6rem;
          letter-spacing: 0.3rem;
          // margin-bottom: 0rem;
        }
      }
      .p__desc {
        p {
          margin-bottom: 1.5rem;
          // line-height: 1.5rem;
          -webkit-column-count: 2;
          -moz-column-count: 2;
          column-count: 2;
          -webkit-column-gap: 10px;
          -moz-column-gap: 10px;
          column-gap: 10px;    
          
          @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
            -webkit-column-count: unset;
            -moz-column-count: unset;
            column-count: unset;
            -webkit-column-gap: 0px;
            -moz-column-gap: 0px;
            column-gap: 0px;    
          }
        }
        a {
          position: relative;
          z-index: 5;
          text-decoration: none;
          color: ${props => props.bg};
          transition: all 0.3s ease;
          padding: 0 0.5rem;
          &:hover {
            color: white;
            &:before {
              height: 1px;
            }
          }
          &:before {
            z-index: -5;
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            bottom: -1px;
            left: 0;
            opacity: 1;
            transition: all 0.3s ease;
            background: white;
          }
        }
      }
    }
    .left {
      width: 40%;
    //   color: white;      
      }      
    }
  }
`;

const IQImg = styled(Img)`
  width: 85% !important;
  max-width: 85% !important;
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    margin-bottom: -7.5rem;
  }
`;

const ImageQuote2 = ({title, image, author, date, html, caption}) => {
    return (
        <IQBlockWrapper bg="#FFFFFF">
            <Container2>
                <div className="left">
                    <IQImg
                        backgroundColor="#FFFFFF"
                        fluid={image.childImageSharp.fluid}
                    />
                    <div className="p__title">
                            <h3>{caption}</h3>
                    </div>                                                              
                </div>
                <div className="right">
                    <div className="info">                        
                        <div
                        className="p__desc" dangerouslySetInnerHTML={{
                            __html: html,
                            }}
                        />                                                                        
                    </div>
                    <div className="p__title">
                        <h3>{author}</h3>
                    </div>               
                    <div>
                        {date}
                    </div>                    
                </div>
            </Container2>
        </IQBlockWrapper>        
    )
}

export default ImageQuote2;