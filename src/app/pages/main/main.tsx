import React, { PureComponent } from 'react';

import { Input } from '@core/components';

import { MainTitle } from './components/main-title.component';
import { MainProps } from './main.container';

export class MainComponent extends PureComponent<MainProps> {

  componentDidMount() {
    this.props.fetchFirst();
  }

  saveToLocalStorage = () => {
    this.props.localStorageService.set('key', '42');
  }

  onInputChange = (value: string) => {
    this.props.localStorageService.set('input', value);
  }

  render() {
    return (
      <div>
        <MainTitle text='Hello World!' />
        <button onClick={this.saveToLocalStorage}>SaveToLS</button>
        <Input onChange={this.onInputChange} />
      </div>
    );
  }
}
