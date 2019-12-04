import React, { PureComponent } from 'react';

export default class DynamicComponent extends PureComponent {
  public render() {
    return (
      <div className="dynamic-component">
        <p className="example-content">Example content</p>
      </div>
    );
  }
}
