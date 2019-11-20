import styled from 'styled-components';

interface PropsAppWrapper {
  theme: {
    colors: string;
  };
}

export const AppWrapper = styled.div<PropsAppWrapper>`
  padding-bottom: 50px;
  background-color: ${props => props.theme.colors.lightGray};
`;
