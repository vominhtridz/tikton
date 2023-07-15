import classNames from 'classnames/bind';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import style from './defaultLayout.module.scss';
const cx = classNames.bind(style);
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx('container')}>
        <div className={cx('sidebar')}>
          <Sidebar />
        </div>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
