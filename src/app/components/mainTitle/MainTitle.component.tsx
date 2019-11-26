import React from 'react';
import { Title as TitleWrapper } from './MainTitle.styles';

interface TitleProps {
  text: string;
}

const MainTitle = ({ text }: TitleProps) => <TitleWrapper>{text}</TitleWrapper>;

export default MainTitle;
