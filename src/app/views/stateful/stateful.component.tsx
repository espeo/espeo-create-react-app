import React, { PureComponent } from 'react';

import { StatefulProps } from './stateful.container';

export class StateFulComponent extends PureComponent<StatefulProps> {
  render() {
    return <div>Stateful component works!</div>;
  }
}
