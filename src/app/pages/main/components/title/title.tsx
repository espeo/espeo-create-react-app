import React from 'react';
import { Title as TitleWrapper } from './title.styles';

interface Props {
  text: string;
}

export const Title = ({ text }: Props) => 
  <TitleWrapper>{text}</TitleWrapper>;
