import * as React from 'react';

import { MainTitle } from './sub-components/main-title.component';
import { MainProps } from './main.container';

export class MainComponent extends React.Component<MainProps> {

  componentDidMount() {
    this.props.fetchFirst();
  }

  saveToLocalStorage = () => {
    this.props.localStorageService.set('key', '42');
  }

  render() {
    return (
      <div>
        <MainTitle text='Hello World!' />
        <button onClick={this.saveToLocalStorage}>SaveToLS</button>
      </div>
    );
  }
}
