import { styled } from '@core/styles/themes/defaultTheme';

export const ArticleTitle = styled.p`
  font-family: Georgia;
  display: flex;
  font-size: 14px;
  color: ${props => props.theme.colors.darkViolet};
  justify-content: flex-start;
  margin-top: 2%;
  margin-bottom: 2%;
`;

export const ArticleBTitle = styled(ArticleTitle)`
  font-size: 24px;
`;
