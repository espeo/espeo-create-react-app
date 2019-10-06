import React, { PureComponent } from 'react';
import { bind } from 'decko';

interface IProps {
  text: string;
  clickHandler(): void;
}

export class Button extends PureComponent<IProps> {

  @bind
  private buttonClickHandler() {
    const { clickHandler } = this.props;
    clickHandler();
  }

  public render() {
    const { text } = this.props;

    return (
      <button onClick={this.buttonClickHandler}>{text}</button>
    );
  }
}
