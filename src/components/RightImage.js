import React from 'react';
import styled, { keyframes } from 'styled-components';
import { media } from '../lib/media';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const RightImage = styled.img`
  max-height: 70vh;
  position: relative;
  left: 60px;

  box-shadow: 0 2px 3px 0 #51509C;
  border-radius: 4px;

  margin-bottom: 15px;
  margin-top: 10px;
  opacity: 0;

  animation: ${fadeIn} 0.8s ease-out forwards;

  ${media.tablet`
    max-width: 100%;
    left: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    animation: ${fadeIn} 0.8s ease-out forwards;
  `};
`;

export default props => <RightImage {...props} />;
