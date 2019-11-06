import styled from 'styled-components';

export const ArticleDate = styled.p`
  display: flex;
  font-size: 0.6em;
  color: ${props => props.theme.colors.gray};
  justify-content: flex-end;
  margin-bottom: 0;
`;

export const ArticleAuthor = styled(ArticleDate)`
  justify-content: flex-start;
  margin-top: 1%;
`;
