import styled from 'styled-components';

interface PropsTitleWrapper {
  theme: {
    colors: string;
  };
}

export const TitleWrapper = styled.div<PropsTitleWrapper>`
  background-color: ${props => props.theme.colors.darkViolet};
  width: 100%;
  padding-top: 2%;
  padding-bottom: 2%;
`;
