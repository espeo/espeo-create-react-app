import React, { PureComponent } from 'react';
import { InjectedIntlProps } from 'react-intl';
import { v1 } from 'uuid';
import { Input, Button } from '@core/components';
import { loadItems } from './store/actions';

import { Title } from './components/title/title';

interface OwnProps {
  loadItems: typeof loadItems;
  items: any;
}

type MainComponentProps = OwnProps & InjectedIntlProps;

class MainComponent extends PureComponent<MainComponentProps> {
  public state = {
    inputText: '',
  };

  public componentDidMount() {
    // this.props.loadItems({
    //   id: 1,
    // });
  }

  private onInputChange = (value: string) => {
    this.setState({
      inputText: value,
    });
  };

  private handleClick = () => {
    // tslint:disable-next-line:no-console
    console.log(this.state.inputText);
  };

  render() {
    const { items, intl } = this.props;

    return (
      <div>
        <Title text={intl.formatMessage({ id: 'page.main.hello' })} />
        <Input onChange={this.onInputChange} />
        <Button
          type="button"
          text="example button"
          clickHandler={this.handleClick}
        />
        <ul>
          {items.map((item: any) => {
            return <li key={v1()}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default MainComponent;
