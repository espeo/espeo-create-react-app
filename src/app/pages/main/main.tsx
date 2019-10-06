import React, { PureComponent } from 'react';

import { loadItems } from './store/actions';

import { Input } from '@core/components';
import { Title } from './components/title/title';

interface IProps {
  loadItems: typeof loadItems;
  items: any;
}

export class MainComponent extends PureComponent<IProps> {
  componentDidMount() {
    this.props.loadItems();
  }

  onInputChange = (value: string) => {
    console.log(value);
  };

  render() {
    const { items } = this.props;

    return (
      <div>
        <Title text="Hello World!" />
        <Input onChange={this.onInputChange} />
        <ul>
          {
            items.map((item: any, key: number) => {
              return (
                <li key={key}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}
