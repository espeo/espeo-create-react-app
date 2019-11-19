import React, { Component } from 'react'
import MyDynamicComponent from './components/dynamic-component';

class DynamicRoute extends Component {
    render() {
        return (
            <div>
                <MyDynamicComponent />
            </div>
        )
    }
}

export default DynamicRoute;
