/*
 * Layout.tsx
 * author: evan kirkiles
 * created on Tue Oct 18 2022
 * 2022 the nobot space,
 */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
