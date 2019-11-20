import styled from 'styled-components';

interface PropsTitle {
  theme: {
    colors: string;
  };
}

export const Title = styled.h1<PropsTitle>`
  font-size: 2.1em;
  text-align: center;
  color: ${props => props.theme.colors.light};
  font-family: Georgia;
`;
