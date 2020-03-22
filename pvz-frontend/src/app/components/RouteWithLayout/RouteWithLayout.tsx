import React from 'react';
import { Route, RouteProps, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteProps {
    layout: any,
    component: React.ComponentType<RouteComponentProps<any>>,
}

const RouteWithLayout: React.FC<IProps> = ({ layout: Layout, component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
};

export default RouteWithLayout;