import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

export const HomeTitle = styled.h1`
  font-size: 48px;
`;
export const HomeText = styled.p`
  font-size: 24px;
`;

export const StyledLink = styled(Link)`
  font-size: 24px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  color: #3470ff;

  &:hover {
    color: #0b44cd;
  }
`;
