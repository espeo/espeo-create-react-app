import React, { PureComponent } from 'react';
import MyDynamicComponent from './components/DynamicComponent/dynamicComponent';

class DynamicRoute extends PureComponent {
  render() {
    return (
      <div>
        <MyDynamicComponent />
      </div>
    );
  }
}

export default DynamicRoute;