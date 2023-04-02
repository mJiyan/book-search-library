import { Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { history, RootStore } from './Store'
import { Header } from './modules';
import { AppStatus } from './shared/components';
import { appRoutes } from './config/';

const App = () => {
    const { loading, error, errorMessage } = useSelector((state: RootStore) => state.book);

    return (
        <>
            <Router history={history}>
                <Header title={"Books Library"} />
                <Switch>
                    <AppStatus isLoading={loading} isError={error} errorMessage={errorMessage}>
                        {appRoutes.map((route, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props: RouteComponentProps<any>) => (
                                        <route.component name={route.name} {...props} {...route.props} />
                                    )}
                                />
                            );
                        })}
                    </AppStatus>
                </Switch>

            </Router>
        </>

    );
};

export default App;
