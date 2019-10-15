import React from 'react';
import { Title as TitleWrapper } from './title.styles';

interface TitleProps {
  text: string;
}

export const Title = ({ text }: TitleProps) => (
  <TitleWrapper>{text}</TitleWrapper>
);
