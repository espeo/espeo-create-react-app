import * as React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const MainTitle = ({ text }: Props) => <Title>{text}</Title>;
