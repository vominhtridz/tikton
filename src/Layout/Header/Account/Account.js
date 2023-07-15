import classNames from 'classnames/bind';
import style from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faEarthAfrica,
  faEllipsisVertical,
  faKeyboard,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
const cx = classNames.bind(style);

function Account() {
  const [toggle, setToggle] = useState(false);

  // set màu tối
  const selectDarkmode = () => {
    document
      .querySelector('body')
      .setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  // set màu sáng
  const selectLightmode = () => {
    document
      .querySelector('body')
      .setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  useEffect(() => {
    const selectedTheme =
      localStorage.getItem('selectedTheme');
    if (selectedTheme === 'dark') {
      selectDarkmode();
      setToggle(true);
    } else {
      selectLightmode();
      setToggle(false);
    }
  }, []);

  const toggletheme = () => {
    setToggle((prevToggle) => !prevToggle); // Thay đổi giá trị toggle

    // Lưu trạ thái toggle vào localStorage
    if (!toggle) {
      selectDarkmode();
      localStorage.setItem('selectedTheme', 'dark');
    } else {
      selectLightmode();
      localStorage.setItem('selectedTheme', 'light');
    }
  };
  return (
    <div className={cx('account')}>
      <div className={cx('upload')}>
        <div>+</div> Tải Lên
      </div>
      <div className={cx('login')}>Đăng Nhập</div>
      <div className={cx('option')}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
        {/* option */}
        <div className={cx('container')}>
          <div className={cx('language')}>
            <FontAwesomeIcon
              className={cx('option-icon')}
              icon={faEarthAfrica}
            />
            Tiếng Việt
          </div>
          <div className={cx('feedback')}>
            <FontAwesomeIcon
              className={cx('option-icon')}
              icon={faCircleQuestion}
            />
            Phản Hồi và trợ giúp
          </div>
          <div className={cx('keyboard')}>
            <FontAwesomeIcon
              className={cx('option-icon')}
              icon={faKeyboard}
            />
            Phím tắt trên bàn phím
          </div>
          <div className={cx('nightOrday')}>
            <FontAwesomeIcon
              className={cx('option-icon')}
              icon={faMoon}
            />
            Chế Độ Tối
            <div
              className={cx('toggle')}
              onClick={toggletheme}
            >
              {toggle == false && (
                <div
                  className={cx('toggle-item_light')}
                ></div>
              )}
              {toggle == true && (
                <div
                  className={cx('toggle-item_dark')}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
