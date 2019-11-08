import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  text-decoration: none;
`;

export const BackLinkText = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  color: ${props => props.theme.colors.darkViolet};
  font-family: Arial;
`;

export const BackImage = styled.div``;
