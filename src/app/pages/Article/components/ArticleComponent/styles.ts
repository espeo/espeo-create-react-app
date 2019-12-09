import { styled } from '@core/styles/themes/defaultTheme';
import { Link } from 'react-router-dom';

export const ArticleContainer = styled.div`
  width: 50%;
  margin: 3% auto;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
`;

export const BackLinkText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${props => props.theme.colors.darkViolet};
  font-family: Arial;
`;

export const BackImage = styled.div``;

export const SourceLink = styled.a`
  font-family: Georgia;
  font-size: 14px;
  padding-right: 8px;
  color: ${props => props.theme.colors.darkViolet};
  text-decoration: none;
  &:visited {
    color: blue;
  }
`;
