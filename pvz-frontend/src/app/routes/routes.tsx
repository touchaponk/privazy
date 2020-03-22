import React, { Fragment } from 'react';
import {
    //Route,
    withRouter,
    RouteComponentProps,
    Switch
} from 'react-router-dom';
import { RouteWithLayout } from '../components';
import { WorkFlowLayout, MainLayout } from '../layouts';

import WorkFlow from '../../features/workflows/WorkFlow';
import WorkFlowDataSubject from '../../features/workflows/WorkFlowDataSubject';
import WorkFlowDetail from '../../features/workflows/WorkFlowDetail';
import WorkFlowEdit from '../../features/workflows/WorkFlowEdit';
import WorkFlowConsent from '../../features/workflows/WorkFlowConsent';
import WorkFlowShareUrl from '../../features/workflows/WorkFlowShareUrl';
import Dashboard from '../../features/dashboard/Dashboard';

const AppRouter: React.FC<RouteComponentProps> = ({ location }) => {
    return (
        <Fragment>
            <Switch>
                <RouteWithLayout
                    component={WorkFlow}
                    exact
                    layout={WorkFlowLayout}
                    path="/"
                />
                <RouteWithLayout
                    component={WorkFlowDataSubject}
                    exact
                    layout={WorkFlowLayout}
                    path="/WorkFlowDataSubject"
                />
                <RouteWithLayout
                    component={WorkFlowDetail}
                    exact
                    layout={WorkFlowLayout}
                    path="/WorkFlowDetail"
                />
                <RouteWithLayout
                    component={WorkFlowEdit}
                    exact
                    layout={WorkFlowLayout}
                    path="/WorkFlowEdit"
                />
                <RouteWithLayout
                    component={WorkFlowConsent}
                    exact
                    layout={WorkFlowLayout}
                    path="/WorkFlowConsent"
                />
                <RouteWithLayout
                    component={WorkFlowShareUrl}
                    exact
                    layout={WorkFlowLayout}
                    path="/WorkFlowShareUrl"
                />
                <RouteWithLayout
                    component={Dashboard}
                    exact
                    layout={MainLayout}
                    path="/Dashboard"
                />
            </Switch>
        </Fragment>
    );
};

export default withRouter(AppRouter);