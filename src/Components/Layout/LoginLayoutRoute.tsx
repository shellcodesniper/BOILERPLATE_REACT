import { ComponentType } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import Layout from './index';

// Replace with `RouteProps`
interface IProps extends RouteProps {
  // should also specify for props here
  // if you have no idea how just leave it as any
  component: ComponentType<any>
}

// Looks like you're using a base component class `Component` in the original code
// so I replace `component` as `Comp` for you
const TestLayout = ({ component: Comp, ...rest }: IProps): JSX.Element => (
  <Route {...rest} render={(matchProps) => (
    <Layout>
      < Comp {...matchProps} />
    </Layout>
  )} />
);

export default TestLayout;
