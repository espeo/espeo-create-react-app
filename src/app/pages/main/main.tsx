import React, { PureComponent } from 'react';
import { bind } from 'decko';
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
  state = {
    inputText: '',
  };

  componentDidMount() {
    this.props.loadItems();
  }

  @bind
  onInputChange(value: string) {
    this.setState({
      inputText: value,
    });
  }

  @bind
  handleClick() {
    alert(this.state.inputText);
  }

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
