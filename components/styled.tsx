import styled from 'styled-components';
import Box from '@mui/material/Box';
import Image from 'next/image';

export const StyledONGCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
`;

export const ONGContent = styled(Box)`
  flex-grow: 1;
`;

export const ONGName = styled('h2')`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
`;

export const ONGCause = styled('p')`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ONGLogo = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 360px; 
  }
  @media (min-width: 601px) and (max-width: 1024px) {
    width: 350px; 
  }
  @media (min-width: 1025px) {
    width: 330px; 
  }
`;

