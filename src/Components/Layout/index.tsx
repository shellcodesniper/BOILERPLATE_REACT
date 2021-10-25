import { ReactNode } from 'react';
import Header from '@component/Header';
import Footer from '@component/Footer';

const Layout = (props: {
  children: ReactNode,
}): JSX.Element => (
  <div>
    <Header />
    <main>
      {props.children}
    </main>

    <Footer />
  </div>
);

export default Layout;
