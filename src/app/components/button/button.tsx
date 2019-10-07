import React, { PureComponent, ButtonHTMLAttributes } from 'react';
import { bind } from 'decko';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clickHandler(): void;
}

export class Button extends PureComponent<ButtonProps> {
  @bind
  private buttonClickHandler() {
    const { clickHandler } = this.props;
    clickHandler();
  }

  public render() {
    const { text } = this.props;

    return (
      <button type="button" onClick={this.buttonClickHandler}>
        {text}
      </button>
    );
  }
}
