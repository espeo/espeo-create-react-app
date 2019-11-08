import styled from 'styled-components';

export const ArticleDescription = styled.p`
  display: flex;
  font-family: Georgia;
  font-size: 0.7em;
  color: ${props => props.theme.colors.black};
  justify-content: flex-start;
  margin-top: 0;
  margin-bottom: 2%;
`;

export const ArticleBDescription = styled(ArticleDescription)`
  font-size: 1.2em;
  margin-top: 5%;
`;

export const ArticleContent = styled(ArticleDescription)`
  font-size: 1em;
  margin-top: 1%;
`;
