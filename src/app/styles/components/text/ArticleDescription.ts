import { styled } from '@styles/themes/defaultTheme';

export const ArticleDescription = styled.p`
  display: flex;
  font-family: Georgia;
  font-size: 8px;
  color: ${props => props.theme.colors.black};
  justify-content: flex-start;
  margin-top: 0;
  margin-bottom: 2%;
`;

export const ArticleBDescription = styled(ArticleDescription)`
  font-size: 16px;
  margin-top: 5%;
`;

export const ArticleContent = styled(ArticleDescription)`
  font-size: 14px;
  margin-top: 1%;
`;
