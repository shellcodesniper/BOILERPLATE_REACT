import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';

import App from '@page/App/App';
import Counter from '@page/Counter/Counter';

const history = createBrowserHistory();

const rootRouter = () => (
  <Router history={history} >
    <Route path='/' component={App} />
    <Route path='/counter' component={Counter} />
  </Router>
);

export default rootRouter;
