import { NextPage } from 'next';
import { ReactNode } from 'react';
import Header from './Header';

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

type Props = {
  children: ReactNode
}

const Layout: NextPage<Props> = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;