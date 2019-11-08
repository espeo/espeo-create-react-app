import React, { PureComponent, ButtonHTMLAttributes } from 'react';
import { Button } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clickHandler(): void;
  backgroundColor?: string;
  color?: string;
  width?: string;
  borderColor?: string;
}

export class StyledButton extends PureComponent<ButtonProps> {
  private buttonClickHandler = () => {
    const { clickHandler } = this.props;
    clickHandler();
  };

  public render() {
    const { text } = this.props;

    return (
      <Button {...this.props} type="button" onClick={this.buttonClickHandler}>
        {text}
      </Button>
    );
  }
}
