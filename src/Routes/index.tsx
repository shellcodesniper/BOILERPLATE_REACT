import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import LoginLayoutRoute from '@component/Layout/LoginLayoutRoute';

import App from '@page/App/App';
import Counter from '@page/Counter/Counter';

const history = createBrowserHistory();

const rootRouter = (): JSX.Element => (
  <Router history={history} >
    <LoginLayoutRoute exact path='/' component={App} />
    <Route exact path='/counter' component={Counter} />
  </Router>
);

export default rootRouter;
