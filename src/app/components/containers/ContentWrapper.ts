import styled from 'styled-components';

interface PropsContentWrapper {
  theme: {
    colors: string;
  }
}

export const ContentWrapper = styled.div<PropsContentWrapper>`
  padding-left: 5%;
  padding-right: 5%;
  background-color: ${props => props.theme.colors.lightGray};
`;
