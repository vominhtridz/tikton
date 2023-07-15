import { Link, useLocation } from 'react-router-dom';
import style from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompass,
  faHouse,
  faUserGroup,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function Sidebar() {
  let location = useLocation();

  return (
    <div className={cx('wrapper')}>
      {/* header */}
      <div className={cx('pages')}>
        <Link
          className={cx('home', {
            primary: location.pathname === '/',
          })}
          to="/"
        >
          <FontAwesomeIcon
            className={cx('sidebar-icon')}
            icon={faHouse}
          />
          Dành cho bạn
        </Link>
        <Link
          className={cx('Following', {
            primary: location.pathname === '/Following',
          })}
          to="/Following"
        >
          <FontAwesomeIcon
            className={cx('sidebar-icon')}
            icon={faUserGroup}
          />
          Đang theo dõi
        </Link>
        <Link
          className={cx('discovery', {
            primary: location.pathname === '/discovery',
          })}
          to="/discovery"
        >
          <FontAwesomeIcon
            className={cx('sidebar-icon')}
            icon={faCompass}
          />
          Khám phá
        </Link>
        <Link
          className={cx('Live', {
            primary: location.pathname === '/Live',
          })}
          to="/Live"
        >
          <FontAwesomeIcon
            className={cx('sidebar-icon')}
            icon={faVideoCamera}
          />
          LIVE
        </Link>
      </div>
      {/* body */}
      <div className={cx('sidebar-login')}>
        <p>
          Đăng nhập để follow các tác <br />
          giả, thích video và xem bình <br />
          luận.
        </p>
        <button>Đăng Nhập</button>
      </div>
      {/* footer */}
      <div className={cx('information')}>
        <div className={cx('information-item')}>
          <a
            target="_blank"
            href="https://www.tiktok.com/about?lang=vi-VN"
          >
            Giới thiệu
          </a>
          <a
            target="_blank"
            href="https://newsroom.tiktok.com/vi-vn/"
          >
            bản tin
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/about/contact?lang=vi-VN"
          >
            Liên hệ
          </a>
          <br />
          <a href="">Sự nghiệp ByteDance</a>
        </div>
        <div className={cx('information-item')}>
          <a href="">TikTok for Good</a>
          <a href="">Quảng Cáo</a>
          <a href="">Developers</a>
          <a href="">Minh Bạch</a>
          <a href="">TikTok Rewards</a>
          <a href="">TikTOk Embeds</a>
        </div>
        <div className={cx('information-item')}>
          <div className={cx('information-item_private')}>
            <a href="">Trợ giúp</a>
            <a href="">An toàn</a>
            <a href="">Điều Khoản</a>
          </div>
          <a href="">Quyền Riêng Tư</a>
          <a href="">Cổng thông tin Tác Giả</a>
          <a href="">Hướng dẫn Cộng đồng</a>
        </div>
        <p className={cx('more')}>
          Thêm
          <div className={cx('more-item')}>
            Nguyên tắc Thực
            <br /> Thi Pháp Luật Của <br /> TikTok
          </div>
        </p>
        {/* year current*/}
        <span>© 2023 TikTok </span>
      </div>
    </div>
  );
}

export default Sidebar;
