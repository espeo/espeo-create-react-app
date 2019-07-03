import * as React from 'react';

import { StatefulProps } from './stateful.container';

export class StateFulComponent extends React.PureComponent<StatefulProps> {

  render() {
    return <div>Stateful component works!</div>;
  }

}
