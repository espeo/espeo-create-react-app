import React, { PureComponent } from 'react';
import { bind } from 'decko';
import { InjectedIntlProps } from 'react-intl';

import { loadItems } from './store/actions';

import { Input, Button } from '@core/components';
import { Title } from './components/title/title';

interface IOwnProps {
  loadItems: typeof loadItems;
  items: any;
}

type IProps = IOwnProps & InjectedIntlProps;

class MainComponent extends PureComponent<IProps> {
  state = {
    inputText: ''
  }
  componentDidMount() {
    this.props.loadItems();
  }

  @bind
  onInputChange(value: string) {
    this.setState({
      inputText: value
    })
  };

  @bind
  handleClick() {
    alert(this.state.inputText);
  }

  render() {
    const { items, intl } = this.props;

    return (
      <div>
        <Title text={intl.formatMessage({id: 'page.main.hello'})} />
        <Input onChange={this.onInputChange} />
        <Button text={'example button'} clickHandler={this.handleClick}/>
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

export default MainComponent