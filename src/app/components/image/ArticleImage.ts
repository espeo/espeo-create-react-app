import styled from 'styled-components';

interface ImagePropsInterface {
  height: number;
  width: string;
}

export const ArticleImage = styled.img<ImagePropsInterface>`
  width: ${props => props.width};
  height: ${props => props.height};
`;
