import classNames from 'classnames/bind';
import style from './explore.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import video from '..//..//img&video/video/girl_1.mp4';
import video1 from '..//..//img&video/video/baybe.mp4';
import video2 from '..//..//img&video/video/cute_girl.mp4';
import video3 from '..//..//img&video/video/dance.mp4';
import video4 from '..//..//img&video/video/ghost.mp4';
import video5 from '..//..//img&video/video/dance1.mp4';
import video6 from '..//..//img&video/video/girl_2.mp4';
import video7 from '..//..//img&video/video/group_funny.mp4';
import video8 from '..//..//img&video/video/group_funny1.mp4';
import video9 from '..//..//img&video/video/hot_music.mp4';
import video10 from '..//..//img&video/video/video1.mp4';
import {
  faAngleLeft,
  faAngleRight,
  faBagShopping,
  faBowlingBall,
  faCameraAlt,
  faCar,
  faCoffee,
  faEarth,
  faHeart,
  faHome,
  faMicrophone,
  faPause,
  faPlay,
  faSmile,
  faTree,
  faUser,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import HoverVideoPlayer from 'react-hover-video-player';

const cx = classNames.bind(style);

function Explore() {
  const leftShift = () => {};
  const rightShift = () => {};
  return (
    <div className={cx('wrapper')}>
      <ul className={cx('header')}>
        <div className={cx('left')} onClick={leftShift}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        <div className={cx('right')} onClick={rightShift}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faMicrophone} />
          <span>Khiêu vũ và Nhạc</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faBowlingBall} />
          <span>Thể thao</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faCameraAlt} />
          <span>Phim/TV/Trường quay</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faVideo} />
          <span>Hài kịch và Kịch</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faCar} />
          <span>Xe Hơi</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faBagShopping} />
          <span>Thời trang</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faCoffee} />
          <span>Phong cách sống</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faTree} />
          <span>Thú cưng và thiên nhiên</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faHome} />
          <span>Quan hệ tình cảm</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faUser} />
          <span>Xã hội</span>
        </li>
        <li className={cx('header-item')}>
          <FontAwesomeIcon icon={faEarth} />
          <span>Giàu thông tin</span>
        </li>
      </ul>
      <div className={cx('cover')}>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        {/* video */}
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video1}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video2}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video3}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video4}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video5}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video6}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('container')}>
          <div className={cx('toggle')}>
            <FontAwesomeIcon
              icon={faPlay}
              className={cx('toggle-item')}
            />
            <span>15.2M</span>
          </div>
          <HoverVideoPlayer
            videoSrc={video7}
            className={cx('video')}
          />

          <div className={cx('discover-user')}>
            <div className={cx('content')}>
              <span className={cx('content-item')}>
                Hi Ryan 🥰 brush lettering
              </span>
              <span className={cx('tag')}>
                #xuhuong #hiendai
              </span>
            </div>
            <div className={cx('user')}>
              <div className={cx('user-main')}>
                <span>thanhnguyen01</span>
              </div>
              <div className={cx('user-item')}>
                <FontAwesomeIcon icon={faHeart} />
                <span className={cx('like')}>413.1K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
