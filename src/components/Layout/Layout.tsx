/*
 * Layout.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */
import s from './Layout.module.scss';
import Header from '../Header/Header';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = function Layout({ children }) {
  return (
    <div className={s.container}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
