import {
  faMagnifyingGlass,
  faSpinner,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import style from '../Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import AccountItem from './AccountItem/AccountItem';

const cx = classNames.bind(style);

function Search() {
  const [account, setAccount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valueInput, setvalueInput] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (valueInput === '') {
      setAccount([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${valueInput}&type=less`
    )
      .then((e) => e.json())
      .then((respone) => {
        console.log(respone.data);
        setAccount(respone.data);
      })
      .catch((e) => {
        return;
      })
      .finally(() => setLoading(false));
  }, [valueInput]);

  const handleClearInput = () => {
    setvalueInput('');
    inputRef.current.focus();
  };

  return (
    <div className={cx('search')}>
      <input
        ref={inputRef}
        type="text"
        className={cx('input')}
        value={valueInput}
        placeholder="Tìm Kiếm"
        onChange={(e) => setvalueInput(e.target.value)}
      />

      {/* loading */}
      {!!loading && (
        <div className={cx('loading')}>
          <FontAwesomeIcon icon={faSpinner} />
        </div>
      )}

      {/* Close */}
      {valueInput && !loading && (
        <div className={cx('close')}>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={handleClearInput}
          />
        </div>
      )}

      {/* Search */}
      <div className={cx('search-btn')}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      {/* item inside search */}
      <div className={cx('search-item')}>
        <h4>Tài Khoản</h4>
        <div className={cx('result-search')}>
          {valueInput && (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx('result-search_item')}
            />
          )}
          {valueInput}
        </div>

        <div className={cx('result-search')}>
          {valueInput && (
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx('result-search_item')}
            />
          )}
          {valueInput}
        </div>
        {account.first_name !== '' &&
          account.map((e, index) => {
            return <AccountItem data={e} key={index} />;
          })}
      </div>
    </div>
  );
}

export default Search;
