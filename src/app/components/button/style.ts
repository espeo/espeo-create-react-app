import styled from 'styled-components';

interface PropsButton {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
  type?: string;
  clickHandler(): void;
}

export const StyledButton = styled.button`
  color: ${(props: PropsButton) => props.color};
  border-color: ${(props: PropsButton) => props.borderColor};
  backgroud-color: ${(props: PropsButton) => props.backgroundColor};
  border-radius: ${(props: any) => (props.shape === 'round' ? '50%' : '3px')};
  width: ${(props: PropsButton) =>
    props.width === 'small' ? '60px' : '100px'};
  height: 20px;
`;
