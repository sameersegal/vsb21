/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from './container';
import Img from 'gatsby-image';
import {Link} from 'gatsby';

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
    height: 35rem;
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
    width: 900px;
    max-width: 100%;
    align-items: center;
    .right {
      width: 50%;
    }
    .left {
      width: 50%;
    //   color: white;
      .p__title {
        h3 {
        //   color: white;
          font-family: ${props => props.theme.fonts.heading} !important;
          font-weight: 800;
          font-size: 2rem;
          line-height: 6rem;
          letter-spacing: 0.3rem;
          margin-bottom: 1.5rem;
        }
      }
      .p__desc {
        p {
          margin-bottom: 1.5rem;
          line-height: 1.5rem;
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
      .p__cta {
        margin-top: 2.5rem;
        button {
          background: transparent;
          border: 0.1rem solid black;
          height: 6rem;
          width: 210px;
          max-width: 100%;
          color: black;          
        }
      }    
    }
  }
`;

const IQImg = styled(Img)`
  width: 300px !important;
  max-width: 100% !important;
  @media screen and (max-width: ${props => props.theme.sizes.tablet}) {
    margin-top: 4rem;
  }
  @media screen and (min-width: ${props => props.theme.sizes.tablet}) {
    margin-bottom: -7.5rem;
  }
`;

const ImagePost = ({title, poster, video, html, to, read_more}) => {
    return (
        <IQBlockWrapper bg="#FFFFFF">
            <Container>
                <div className="left">                  
                    <div className="info">                        
                        <div className="p__title">
                            <h3>{title}</h3>
                        </div>                                      
                        <div
                        className="p__desc">
                          <p dangerouslySetInnerHTML={{
                            __html: html,
                          }}
                        />                             
                        </div>                        
                        <div className="p__cta">
                          <Link to={to}>
                            <button>{read_more}</button>
                          </Link>
                        </div>                     
                    </div>
                </div>                
                <div className="right">
                    <video poster={poster.publicURL} autoPlay loop muted playsInline controls="true">
                      {video.map(({src, type}) => {
                        return (
                          <source key={type} src={src.publicURL} type={type}/>  
                        )                        
                      }
                      )}                      
                    </video>
                </div>
            </Container>
        </IQBlockWrapper>
    )
}

export default ImagePost;