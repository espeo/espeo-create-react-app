import { styled } from '@core/styles/themes/defaultTheme';

interface PropsButton {
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  width?: string;
  type?: string;
  borderRadius?: string;
  shape?: string;
  clickHandler(): void;
}

export const Button = styled.button<PropsButton>`
  color: ${props => props.color};
  border-color: ${props => props.borderColor};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => (props.shape === 'round' ? '50%' : '3px')};
  width: ${props => (props.width === 'small' ? '60px' : '100px')};
  height: 20px;
  font-family: Georgia;
`;
