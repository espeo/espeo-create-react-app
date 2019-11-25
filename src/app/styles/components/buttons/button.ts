import { styled } from '@styles/themes/defaultTheme';

export const ArticleButton = styled.button`
  height: 24px;
  width: ${(props: { width?: string }) => props.width ?? '100%'};
  background-color: ${props => props.theme.colors.darkViolet};
  border-radius: 5px;
`;
export const ArticleButtonText = styled.span`
  font-size: 1em;
  color: ${props => props.theme.colors.darkViolet};
  font-family: Georgia;
`;