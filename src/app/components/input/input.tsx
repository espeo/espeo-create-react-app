import React, { PureComponent } from 'react';

interface InputProps {
  onChange: (text: string) => void;
}

export class Input extends PureComponent<InputProps> {
  private onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(ev.target.value);
  };

  public render() {
    return <input onChange={this.onChange} />;
  }
}
