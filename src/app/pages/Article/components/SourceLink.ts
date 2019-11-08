import styled from 'styled-components';

export const SourceLink = styled.a`
  font-family: Georgia;
  font-size: 14px;
  padding-right: 8px;
  color: ${props => props.theme.colors.darkViolet}
  text-decoration: none;
  &:visited {
      color: blue;
  }
`;
