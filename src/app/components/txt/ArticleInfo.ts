import styled from 'styled-components';

export const ArticleDate = styled.p`
  display: flex;
  font-family: Georgia;
  font-size: 0.6em;
  color: ${props => props.theme.colors.gray};
  justify-content: flex-end;
  margin-bottom: 0;
`;

export const ArticleBDate = styled(ArticleDate)`
  font-size: 0.9em;
  margin-bottom: 2%;
`;

export const ArticleAuthor = styled(ArticleDate)`
  justify-content: flex-start;
  margin-top: 1%;
  font-family: Georgia;
`;

export const ArticleBAuthor = styled(ArticleDate)`
  justify-content: flex-start;
  margin-bottom: 5%;
  font-size: 0.8em;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding-bottom: 2%;
`;
