import { styled } from '@styles/themes/defaultTheme';

export const ArticleDate = styled.p`
  display: flex;
  font-family: Georgia;
  font-size: 8px;
  color: ${props => props.theme.colors.gray};
  justify-content: flex-end;
  margin-bottom: 0;
`;

export const ArticleBDate = styled(ArticleDate)`
  font-size: 9px;
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
  font-size: 8px;
  border-bottom: 1px solid ${props => props.theme.colors.gray};
  padding-bottom: 2%;
`;
