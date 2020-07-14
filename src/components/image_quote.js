/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './container';
import Img from 'gatsby-image';

const Container2 = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
`

const IQsWrapper = styled.div`
  background: white;
  margin-bottom: 10rem;
  section {
    .title {
      h2 {
        color: ${props => props.theme.colors.red};
        margin-bottom: 2rem;
      }
    }
  }
`;

const IQBlockWrapper = styled.div`
  background: ${props => props.bg};  
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    height: 65rem;
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
    // height: 100%;
    // width: 900px;
    max-width: 100%;
    align-items: center;
    .right {
      width: 35%;
      height: 100%;
      display: flex;
    }
    .left {
      width: 65%;
    //   color: white;
      .p__title {
        h2 {
        //   color: white;
          // font-family: ${props => props.theme.fonts.heading} !important;
          font-weight: 800;
          // font-size: 2rem;
          // line-height: 6rem;
          // letter-spacing: 0.3rem;
          margin-bottom: 1.5rem;
        }
      }
      .p__desc {
        p {
          margin-bottom: 1.5rem;
          // line-height: 1.5rem;
        }        
      }      
    }
  }
`;

const IQImg = styled(Img)`
  width: 500px !important;
  max-width: 100% !important;
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    // margin-bottom: -7.5rem;
  }
`;

const ImageQuote = ({title, image, html, author}) => {
    return (
        <IQBlockWrapper bg="#FFFFFF">
            <Container2>
                <div className="left">
                    <div className="info">                        
                        <div
                        className="p__desc"
                        dangerouslySetInnerHTML={{
                            __html: html,
                        }}
                        />  
                        <div className="p__title">
                            <h2>{author}</h2>
                        </div>                                      
                    </div>
                </div>
                <div className="right">
                    <IQImg
                        backgroundColor="#FFFFFF"
                        fluid={image.childImageSharp.fluid}
                    />
                </div>
            </Container2>
        </IQBlockWrapper>
    )
}

export default ImageQuote;