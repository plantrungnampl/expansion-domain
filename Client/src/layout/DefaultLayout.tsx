import Footer from './Footer';
import Header from './Header';
interface DefaultLayoutProps {
  children?: React.ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default DefaultLayout;
