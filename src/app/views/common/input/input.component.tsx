import React, { PureComponent } from 'react';

interface Props {
  onChange: (text: string) => void;
}

export class Input extends PureComponent<Props> {
  onChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(ev.target.value);
  }

  render() {
    return (
      <input onChange={this.onChange} />
    );
  }
}
