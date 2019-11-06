import styled from 'styled-components';

interface ImagePropsInterface {
  height: number;
}

export const ArticleImage = styled.img<ImagePropsInterface>`
  width: 100%;
  height: ${props => props.height};
`;
