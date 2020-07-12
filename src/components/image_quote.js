/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './Container';
import Img from 'gatsby-image';

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
    height: 75rem;
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
      width: 45%;
    }
    .left {
      width: 55%;
    //   color: white;
      .p__title {
        h3 {
        //   color: white;
          font-weight: 800;
          font-size: 5rem;
          line-height: 6rem;
          letter-spacing: 0.3rem;
          margin-bottom: 1.5rem;
        }
      }
      .p__desc {
        p {
          margin-bottom: 1.5rem;
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
      .p__tags {
        p {
          font-weight: bold;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
        }
        ul {
          margin-top: 1rem;
          list-style: none;
          li {
            margin-bottom: 1rem;
            position: relative;
            &:last-child {
              margin-bottom: 0;
            }
            &:before {
              content: '';
              position: absolute;
              height: 8px;
              width: 2px;
              background: white;
              top: 0.85rem;
              left: -1.5rem;
              z-index: 5;
            }
            &:after {
              content: '';
              position: absolute;
              height: 8px;
              width: 2px;
              background: white;
              top: 0.85rem;
              left: -1.5rem;
              z-index: 5;
              transform: rotate(90deg);
            }
          }
        }
      }
      .p__cta {
        margin-top: 2.5rem;
        button {
          background: transparent;
          border: 0.1rem solid white;
          height: 6rem;
          width: 210px;
          max-width: 100%;
          color: white;
          text-transform: uppercase;
        }
      }
    }
  }
`;

const IQImg = styled(Img)`
  width: 100% !important;
  max-width: 100% !important;
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    margin-bottom: -7.5rem;
  }
`;

const ImageQuote = ({title, image, html, author}) => {
    return (
        <IQBlockWrapper bg="#DDDDDD">
            <Container>
                <div className="left">
                    <div className="info">                        
                        <div
                        className="p__desc"
                        dangerouslySetInnerHTML={{
                            __html: html,
                        }}
                        />  
                        <div className="p__title">
                            <h3>{author}</h3>
                        </div>                                      
                    </div>
                </div>
                <div className="right">
                    <IQImg
                        backgroundColor="#DDDDDD"
                        fluid={image.childImageSharp.fluid}
                    />
                </div>
            </Container>
        </IQBlockWrapper>
    )
}

export default ImageQuote;