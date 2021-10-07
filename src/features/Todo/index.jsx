import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage/index';
import ListPage from './pages/ListPage/index';
import NotFound from './../../components/NotFound/index';

const TodoFeature = () => {
    const match = useRouteMatch();

    return (
        <div>
            Todo Feature
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todoId`} component={DetailPage} exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
};

export default TodoFeature;
