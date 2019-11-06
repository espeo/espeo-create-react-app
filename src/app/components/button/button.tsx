// import React, { PureComponent, ButtonHTMLAttributes } from 'react';

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   text: string;
//   clickHandler(): void;
// }

// export class Button extends PureComponent<ButtonProps> {
//   private buttonClickHandler = () => {
//     const { clickHandler } = this.props;
//     clickHandler();
//   };

//   public render() {
//     const { text } = this.props;

//     return (
//       <button type="button" onClick={this.buttonClickHandler}>
//         {text}
//       </button>
//     );
//   }
// }
import React, { PureComponent, ButtonHTMLAttributes } from 'react';
import { StyledButton } from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  clickHandler(): void;
  backgroundColor?: string;
  color?: string;
  width?: string;
  borderColor?: string;
}

export class Button extends PureComponent<ButtonProps> {
  private buttonClickHandler = () => {
    const { clickHandler } = this.props;
    clickHandler();
  };

  public render() {
    const { text } = this.props;

    return (
      <StyledButton
        {...this.props}
        type="button"
        onClick={this.buttonClickHandler}
      >
        {text}
      </StyledButton>
    );
  }
}
