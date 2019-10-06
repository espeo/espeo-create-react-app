import React, { PureComponent } from 'react';

interface IProps {
  text: string;
  clickHandler(): void;
}

export class Button extends PureComponent<IProps> {

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
