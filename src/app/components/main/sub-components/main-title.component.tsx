import * as React from 'react';

interface Props {
    text: string;
}

export const MainTitle = ({ text }: Props) => <h1>{ text }</h1>;
