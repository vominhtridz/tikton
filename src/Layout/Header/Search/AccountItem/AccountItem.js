import classNames from 'classnames/bind';
import style from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
function AccountItem({ data }) {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src={data.avatar}
        alt={data.user_name}
      />
      <div className={cx('user')}>
        <span className={cx('full_name')}>
          {data.full_name}
        </span>
        <span className={cx('user_name')}>
          {data.full_name}
        </span>
      </div>
    </div>
  );
}

export default AccountItem;
