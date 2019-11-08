import styled from 'styled-components';

export const ArticleTitle = styled.p`
  font-family: Georgia;
  display: flex;
  font-size: 1em;
  color: ${props => props.theme.colors.darkViolet};
  justify-content: flex-start;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const ArticleBTitle = styled(ArticleTitle)`
  font-size: 1.8em;
`;
