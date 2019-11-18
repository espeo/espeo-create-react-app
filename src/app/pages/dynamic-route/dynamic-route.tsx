import React, { Component } from 'react'

const MyDynamicComponent = React.lazy(() => import(/* webpackChunkName: "dynamic-component" */ "./components/dynamic-component"));

class DynamicRoute extends Component {
    render() {
        return (
            <div>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <MyDynamicComponent />
                </React.Suspense>
            </div>
        )
    }
}

export default DynamicRoute;
