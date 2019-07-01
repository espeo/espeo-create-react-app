import * as React from 'react';

import { MainTitle } from './sub-components/main-title.component';
import { MainProps } from './main.container';

export class MainComponent extends React.Component<MainProps> {

  render() {
    return (
      <div>
        <MainTitle text='Hello World!' />
      </div>
    );
  }
}
