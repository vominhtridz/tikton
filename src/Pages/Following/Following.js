import classNames from 'classnames/bind';
import style from './following.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import containerPuclic from '..//..//img&video/video/index';
import video1 from '..//..//img&video/video/girl_1.mp4';
import img from '..//..//img&video/img/dat_vila.jpeg';
import HoverVideoPlayer from 'react-hover-video-player';

const cx = classNames.bind(style);

function Following() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <HoverVideoPlayer
          videoSrc={video1}
          pausedOverlay={
            <img
              src={img}
              alt="dat vila"
              style={{ height: '100%', width: '100%' }}
            />
          }
          style={{
            width: '226px',
            height: '302px',
          }}
        />
        <div className={cx('item')}>
          <img className={cx('logo')} src={img} />
          <h5 className={cx('name')}>Theanh28</h5>
          <p className={cx('username')}>
            Theanh28Entertaiment
            <FontAwesomeIcon
              icon={faCheck}
              className={cx('check')}
            />
          </p>
          <button className={cx('follow')}>Follow</button>
        </div>
      </div>
      <div className={cx('container')}>
        <HoverVideoPlayer
          videoSrc={video1}
          pausedOverlay={
            <img
              src={img}
              alt="dat vila"
              style={{ height: '100%', width: '100%' }}
            />
          }
          style={{
            width: '226px',
            height: '302px',
          }}
        />
        <div className={cx('item')}>
          <img className={cx('logo')} src={img} />
          <h5 className={cx('name')}>Theanh28</h5>
          <p className={cx('username')}>
            Theanh28Entertaiment
            <FontAwesomeIcon
              icon={faCheck}
              className={cx('check')}
            />
          </p>
          <button className={cx('follow')}>Follow</button>
        </div>
      </div>
      <div className={cx('container')}>
        <HoverVideoPlayer
          videoSrc={video1}
          pausedOverlay={
            <img
              src={img}
              alt="dat vila"
              style={{ height: '100%', width: '100%' }}
            />
          }
          style={{
            width: '226px',
            height: '302px',
          }}
        />
        <div className={cx('item')}>
          <img className={cx('logo')} src={img} />
          <h5 className={cx('name')}>Theanh28</h5>
          <p className={cx('username')}>
            Theanh28Entertaiment
            <FontAwesomeIcon
              icon={faCheck}
              className={cx('check')}
            />
          </p>
          <button className={cx('follow')}>Follow</button>
        </div>
      </div>
      <div className={cx('container')}>
        <HoverVideoPlayer
          videoSrc={video1}
          pausedOverlay={
            <img
              src={img}
              alt="dat vila"
              style={{ height: '100%', width: '100%' }}
            />
          }
          style={{
            width: '226px',
            height: '302px',
          }}
        />
        <div className={cx('item')}>
          <img className={cx('logo')} src={img} />
          <h5 className={cx('name')}>Theanh28</h5>
          <p className={cx('username')}>
            Theanh28Entertaiment
            <FontAwesomeIcon
              icon={faCheck}
              className={cx('check')}
            />
          </p>
          <button className={cx('follow')}>Follow</button>
        </div>
      </div>
      <div className={cx('container')}>
        <HoverVideoPlayer
          videoSrc={video1}
          pausedOverlay={
            <img
              src={img}
              alt="dat vila"
              style={{ height: '100%', width: '100%' }}
            />
          }
          style={{
            width: '226px',
            height: '302px',
          }}
        />
        <div className={cx('item')}>
          <img className={cx('logo')} src={img} />
          <h5 className={cx('name')}>Theanh28</h5>
          <p className={cx('username')}>
            Theanh28Entertaiment
            <FontAwesomeIcon
              icon={faCheck}
              className={cx('check')}
            />
          </p>
          <button className={cx('follow')}>Follow</button>
        </div>
      </div>
      <div className={cx('container')}>
        <HoverVideoPlayer
          videoSrc={video1}
          pausedOverlay={
            <img
              src={img}
              alt="dat vila"
              style={{ height: '100%', width: '100%' }}
            />
          }
          style={{
            width: '226px',
            height: '302px',
          }}
        />
        <div className={cx('item')}>
          <img className={cx('logo')} src={img} />
          <h5 className={cx('name')}>Theanh28</h5>
          <p className={cx('username')}>
            Theanh28Entertaiment
            <FontAwesomeIcon
              icon={faCheck}
              className={cx('check')}
            />
          </p>
          <button className={cx('follow')}>Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Following;
