import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProgressBar from './components/cicularProgress/ProgressBar';

const Login = lazy(() => import('./view/login/Login'));
const Register = lazy(() => import('./view/register/Register'));
const List = lazy(() => import('./view/Produtos/list/List'));


const token = localStorage.getItem('access_token');

const PrivateRoutes = ({component: Component, ...rest}) => (
    <Route {...rest} render={ props=> (
        token ? (< Component {...props} />) : (< Redirect to={{pathname: '/login', state: { from: props.location } }} /> )
    )} />
)

const Routes = () => (
    <Router>
        <Suspense fallback={<div className="mt-5 pt-5" ><ProgressBar/></div>}>
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route exact path="/" component={Login} />
                <PrivateRoutes path="/painel" component={List} />
            </Switch>
        </Suspense>
    </Router>
)
export default Routes;  